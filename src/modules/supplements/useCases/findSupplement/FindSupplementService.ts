import { Supplement } from "../../model/Supplement";
import { ISupplementsRepository } from "../../repositories/ISupplementsRepository";

class FindSupplementService {

    constructor(private repository: ISupplementsRepository) { }

    async execute(id: string): Promise<Supplement> {
        const supplement = await this.repository.find(id);

        return supplement;
    }
}

export { FindSupplementService }