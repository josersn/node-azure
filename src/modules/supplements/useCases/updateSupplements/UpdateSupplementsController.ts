import { Request, Response } from "express";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { UpdateSupplementsService } from "./UpdateSupplementsService";

class UpdateSupplementsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const { dead_line } = req.body;

        const repository = new SupplementsRepository();
        const service = new UpdateSupplementsService(repository);

        await service.execute(id, dead_line);

        return res.json();
    }
}

export { UpdateSupplementsController }