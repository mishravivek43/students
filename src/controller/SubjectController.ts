import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Subject} from "../entity/Subject";

export class SubjectController {

    private subjectRepository = getRepository(Subject);

    async all(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.student || request.session.teacher){
                return this.subjectRepository.find();
            }else{
                return {'status':0,'message':"Unauthorised access"}
            }
        }else{
             return {'status':0,'message':"Unauthorised access"}
        }


    }

    async one(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.student || request.session.teacher){
                return this.subjectRepository.findOne(request.params.id);
            }else{
                return {'status':0,'message':"Unauthorised access"}
            }
        }else{
             return {'status':0,'message':"Unauthorised access"}
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.teacher){
                return this.subjectRepository.save(request.body);
            }else{
                return {'status':0,'message':"Unauthorised access"}
            }
        }else{
             return {'status':0,'message':"Unauthorised access"}
        }


    }

    async remove(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.teacher){
                let subjectToRemove = await this.subjectRepository.findOne(request.params.id);
                await this.subjectRepository.remove(subjectToRemove);
            }else{
                return {'status':0,'message':"Unauthorised access"}
            }
        }else{
             return {'status':0,'message':"Unauthorised access"}
        }

    }

}