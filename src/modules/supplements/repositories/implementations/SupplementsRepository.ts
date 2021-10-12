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

    async listSupplements(): Promise<Supplement[]> {
        const supplements = this.repository.find();

        return supplements;
    }

    async find(id: string): Promise<Supplement> {
        const supplement = await this.repository.findOne(id);

        return supplement;
    }

    async updateDeadLine(id: string, dead_line: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ dead_line })
            .where("id = :id")
            .setParameters({ id })
            .execute();
            

            return;
    }  

    async deleteSupplement(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { SupplementsRepository }