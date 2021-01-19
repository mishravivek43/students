import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Subject} from "../entity/Subject";

export class SubjectController {

    private subjectRepository = getRepository(Subject);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.subjectRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.subjectRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.subjectRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let subjectToRemove = await this.subjectRepository.findOne(request.params.id);
        await this.subjectRepository.remove(subjectToRemove);
    }

}