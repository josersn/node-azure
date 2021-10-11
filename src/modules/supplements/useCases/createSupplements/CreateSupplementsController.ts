import { Request, Response } from "express";
import { container } from "tsyringe";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { CreateSupplementsService } from "./CreateSupplementsService";

class CreateSupplementsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { name } = req.body;

        const repository = new SupplementsRepository();
        const service = new CreateSupplementsService(repository);

        const supplement = await service.execute(name);

        return res.json(supplement);
    }
}

export { CreateSupplementsController };