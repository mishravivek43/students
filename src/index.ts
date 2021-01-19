import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import * as session from "express-session";
import * as redis from "redis";
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);
declare module 'express-session' {
  export interface SessionData {
    student: { [key: string]: any };
    teacher:{ [key: string]: any };
    admin:{ [key: string]: any };
  }
}
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(session({
        secret: 'ThisIsHowYouUseRedisSessionStorage',
        name: '_redisPractice',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
        store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 15*24*3600*1000 }),
    }));
    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/students to see results");


}).catch(error => console.log(error));


