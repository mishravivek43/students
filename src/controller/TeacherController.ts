import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Teacher} from "../entity/Teacher";

export class TeacherController {

    private teacherRepository = getRepository(Teacher);

    async all(request: Request, response: Response, next: NextFunction) {
        if(request.session.student || request.session.teacher){
            return this.teacherRepository.find();
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

    async one(request: Request, response: Response, next: NextFunction) {
        if(request.session.student || request.session.teacher){
            return this.teacherRepository.findOne(request.params.id);
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.teacherRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
         if(request.session.teacher){
            let teacherToRemove = await this.teacherRepository.findOne(request.params.id);
            await this.teacherRepository.remove(teacherToRemove);
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }
    async login(request: Request, response: Response, next: NextFunction) {
        let loggedInUser = await this.teacherRepository.findOne({'username':request.body.username,'password':request.body.password});
        if (loggedInUser){
            request.session.teacher = request.body.username;
            return {'status':1,'message':"Logged in Successfully"}
        }else{
            return {'status':0,'message':"Wrong Credentials"}
        }
    }

}