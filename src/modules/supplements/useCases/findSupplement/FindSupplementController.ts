import { Request, Response } from "express";
import { SupplementsRepository } from "../../repositories/implementations/SupplementsRepository";
import { FindSupplementService } from "./FindSupplementService";

class FindSupplementController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const repository = new SupplementsRepository();
        const service = new FindSupplementService(repository);

        const supplement = await service.execute(id);


        return res.json(supplement);
    }
}

export { FindSupplementController };