import { Request, Response } from "express";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { ListSupplementsService } from "./ListSupplementsService";

class ListSupplementsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const repository = new SupplementsRepository();
        const service = new ListSupplementsService(repository);

        const supplements = await service.execute();

        return res.json(supplements);
    }
}

export { ListSupplementsController }