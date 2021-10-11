import { Router } from "express";
import { CreateSupplementsController } from "../modules/supplements/useCases/createSupplements/CreateSupplementsController";



const supplementsRoutes = Router();


const createSupplementsController = new CreateSupplementsController();

supplementsRoutes.post("/", createSupplementsController.handle)


export { supplementsRoutes };