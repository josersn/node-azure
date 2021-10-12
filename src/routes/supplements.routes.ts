import { Router } from "express";
import { CreateSupplementsController } from "../modules/supplements/useCases/createSupplements/CreateSupplementsController";
import { ListSupplementsController } from "../modules/supplements/useCases/listSupplements/ListSupplementsController";
import { UpdateSupplementsController } from "../modules/supplements/useCases/updateSupplements/UpdateSupplementsController";



const supplementsRoutes = Router();


const createSupplementsController = new CreateSupplementsController();
const listSupplementsController = new ListSupplementsController();
const updateController = new UpdateSupplementsController();

supplementsRoutes.get("/", listSupplementsController.handle);
supplementsRoutes.post("/", createSupplementsController.handle);
supplementsRoutes.put("/:id", updateController.handle);


export { supplementsRoutes };