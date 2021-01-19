import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attandance} from "../entity/Attandance";

export class AttandanceController {

    private attandanceRepository = getRepository(Attandance);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.attandanceRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.attandanceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.attandanceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let attandanceToRemove = await this.attandanceRepository.findOne(request.params.id);
        await this.attandanceRepository.remove(attandanceToRemove);
    }

}