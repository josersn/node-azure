import { Supplement } from "../../model/Supplement";
import { ISupplementsRepository } from "../../repositories/ISupplementsRepository";

class CreateSupplementsService {

    constructor(private repository: ISupplementsRepository) { }

    async execute(name: string): Promise<Supplement> {

        const supplement = this.repository.create(name);

        return supplement;
    };

}

export { CreateSupplementsService }