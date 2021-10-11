import { Supplement } from "../model/Supplement";

interface ISupplementsRepositoryDTO {
    name: string;
}

interface ISupplementsRepository {
    create(name: string): Promise<Supplement>;
}

export { ISupplementsRepository, ISupplementsRepositoryDTO }
