import { ISupplementsRepository } from "../../repositories/ISupplementsRepository";

class UpdateSupplementsServices {

    constructor(
        private repository: ISupplementsRepository
    ) { }

    async execute(id: string, dead_line: boolean): Promise<void> {
        const supplement = await this.repository.find(id);

        if(!supplement) {
            /**
             * not implemented 
             */
        }

        await this.repository.updateDeadLine(supplement.id, dead_line);

        return;
    }
}

export { UpdateSupplementsServices }