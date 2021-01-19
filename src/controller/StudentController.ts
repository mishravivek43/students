import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Student} from "../entity/Student";

export class StudentController {

    private studentRepository = getRepository(Student);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.studentRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.studentRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.studentRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await this.studentRepository.findOne(request.params.id);
        await this.studentRepository.remove(studentToRemove);
    }
     async login(request: Request, response: Response, next: NextFunction) {
        let loggedInUser = await this.studentRepository.findOne({'username':request.body.username,'password':request.body.password});
        if (loggedInUser){
            return {'status':1,'message':"Logged in Successfully"}
        }else{
            return {'status':0,'message':"Wrong Credentials"}
        }
    }

}