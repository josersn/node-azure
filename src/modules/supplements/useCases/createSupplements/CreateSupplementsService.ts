import { ISupplementsRepository } from "../../repositories/ISupplementsRepository";

class CreateSupplementsService {

    constructor(private repository: ISupplementsRepository) { }

    async execute() {

        // const supplement = this.repository.create("José");

        return { ok: true };
    };

}

export { CreateSupplementsService }