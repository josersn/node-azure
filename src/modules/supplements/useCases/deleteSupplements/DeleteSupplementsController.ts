import { Request, Response } from "express";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { DeleteSupplementsService } from "./DeleteSupplementsService";

class DeleteSupplementsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const repository = new SupplementsRepository();
        const service = new DeleteSupplementsService(repository);

        const resposta = await service.execute(id);

        return res.json({resposta});
    }
}

export { DeleteSupplementsController };