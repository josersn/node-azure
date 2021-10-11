import { Supplement } from "../../model/Supplement";
import { ISupplementsRepository } from "../../repositories/ISupplementsRepository";

class ListSupplementsService {

    constructor(private repository: ISupplementsRepository) { }

    async execute(): Promise<Supplement[]> {
        const supplements = this.repository.listSupplements();

        return supplements
    }
}

export { ListSupplementsService };