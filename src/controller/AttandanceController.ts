import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attandance} from "../entity/Attandance";

export class AttandanceController {

    private attandanceRepository = getRepository(Attandance);

    async all(request: Request, response: Response, next: NextFunction) {
        if(request.session.teacher){
            return this.attandanceRepository.find();
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

    async one(request: Request, response: Response, next: NextFunction) {
        if(request.session.teacher){
            return this.attandanceRepository.findOne(request.params.id);
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

    async save(request: Request, response: Response, next: NextFunction) {
        if(request.session.teacher){
           return this.attandanceRepository.save(request.body);
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

    async remove(request: Request, response: Response, next: NextFunction) {
        if(request.session.teacher){
            let attandanceToRemove = await this.attandanceRepository.findOne(request.params.id);
            await this.attandanceRepository.remove(attandanceToRemove);
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }

}