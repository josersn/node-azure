import { Router } from "express";
import { CreateSupplementsController } from "../modules/supplements/useCases/createSupplements/CreateSupplementsController";
import { ListSupplementsController } from "../modules/supplements/useCases/listSupplements/ListSupplementsController";



const supplementsRoutes = Router();


const createSupplementsController = new CreateSupplementsController();
const listSupplementsController = new ListSupplementsController();

supplementsRoutes.get("/", listSupplementsController.handle);
supplementsRoutes.post("/", createSupplementsController.handle);


export { supplementsRoutes };