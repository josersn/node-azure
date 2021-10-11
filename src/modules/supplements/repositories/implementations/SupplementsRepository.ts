import { ISupplementsRepository } from "../ISupplementsRepository";

class SupplementsRepository implements ISupplementsRepository {
    
    create(name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { SupplementsRepository }