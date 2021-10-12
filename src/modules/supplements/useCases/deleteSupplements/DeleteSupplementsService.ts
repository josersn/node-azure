import { ISupplementsRepository } from "../../repositories/ISupplementsRepository"

class DeleteSupplementsService {

    constructor(private repository: ISupplementsRepository) { }

    async execute(id: string): Promise<void> {
        const supplement = await this.repository.find(id);

        if(!supplement) {
            /**
             * not implemented 
             */
            console.log("Item não existe");
            return;
            
        }

        
        await this.repository.deleteSupplement(supplement.id);
    }
}

export { DeleteSupplementsService }