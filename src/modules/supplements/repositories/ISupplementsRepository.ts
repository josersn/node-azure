interface ISupplementsRepositoryDTO {
    name: string;
}

interface ISupplementsRepository {
    create(name: string): Promise<void>;
}

export { ISupplementsRepository, ISupplementsRepositoryDTO }
