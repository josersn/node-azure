import { container } from "tsyringe";

import { ISupplementsRepository } from "../../modules/supplements/repositories/ISupplementsRepository";
import { SupplementsRepository } from "../../modules/supplements/repositories/implementations/SupplementsRepository";

container.registerSingleton<ISupplementsRepository>(
    "SupplementsRepository",
    SupplementsRepository
)