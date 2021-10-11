import { Request, Response } from "express";
import { container } from "tsyringe";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { CreateSupplementsService } from "./CreateSupplementsService";

class CreateSupplementsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { name } = req.body;

        const repository = new SupplementsRepository();
        const service = new CreateSupplementsService(repository);

        const result = await service.execute();

        return res.json({ body: name });
    }
}

export { CreateSupplementsController };