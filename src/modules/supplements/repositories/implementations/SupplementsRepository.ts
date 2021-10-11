import { getRepository, Repository } from "typeorm";
import { Supplement } from "../../model/Supplement";

import { ISupplementsRepository } from "../ISupplementsRepository";

class SupplementsRepository implements ISupplementsRepository {

    private repository: Repository<Supplement>;

    constructor() {
        this.repository = getRepository(Supplement);
    }

    async create(name: string): Promise<Supplement> {
        const supplement = this.repository.create({
            name,
            dead_line: false
        });

        await this.repository.save(supplement);

        return supplement;
    }

    async listSupplements() : Promise<Supplement[]> {
        const supplements = this.repository.find();

        return supplements;
    }
}

export { SupplementsRepository }