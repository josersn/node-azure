import { Supplement } from "../model/Supplement";

interface ISupplementsRepositoryDTO {
    name: string;
}

interface ISupplementsRepository {
    create(name: string): Promise<Supplement>;
    listSupplements(): Promise<Supplement[]>;
    find(id: string): Promise<Supplement>;
    updateDeadLine(id: string, dead_line: boolean): Promise<void>;
    deleteSupplement(id: string): Promise<void>;
}

export { ISupplementsRepository, ISupplementsRepositoryDTO }
