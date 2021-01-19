import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Student} from "../entity/Student";

export class StudentController {

    private studentRepository = getRepository(Student);

    async all(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.student || request.session.teacher){
                return this.studentRepository.find();
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
                return this.studentRepository.findOne(request.params.id);
            }else{
                return {'status':0,'message':"Unauthorised access"}
        }
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }


    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.studentRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        if(request.session){
            if(request.session.student || request.session.teacher){
               let studentToRemove = await this.studentRepository.findOne(request.params.id);
                await this.studentRepository.remove(studentToRemove);
            }else{
                return {'status':0,'message':"Unauthorised access"}
        }
        }else{
            return {'status':0,'message':"Unauthorised access"}
        }

    }
     async login(request: Request, response: Response, next: NextFunction) {
        let loggedInUser = await this.studentRepository.findOne({'username':request.body.username,'password':request.body.password});
        if (loggedInUser){
            request.session.student = request.body.username;
            return {'status':1,'message':"Logged in Successfully"}
        }else{
            return {'status':0,'message':"Wrong Credentials"}
        }
    }

}