import { Router } from "express";
import { CreateSupplementsController } from "../modules/supplements/useCases/createSupplements/CreateSupplementsController";
import { DeleteSupplementsController } from "../modules/supplements/useCases/deleteSupplements/DeleteSupplementsController";
import { FindSupplementController } from "../modules/supplements/useCases/findSupplement/FindSupplementController";
import { ListSupplementsController } from "../modules/supplements/useCases/listSupplements/ListSupplementsController";
import { UpdateSupplementsController } from "../modules/supplements/useCases/updateSupplements/UpdateSupplementsController";



const supplementsRoutes = Router();


const createSupplementsController = new CreateSupplementsController();
const listSupplementsController = new ListSupplementsController();
const updateController = new UpdateSupplementsController();
const findSupplementController = new FindSupplementController();
const deleteSupplementsController = new DeleteSupplementsController();

supplementsRoutes.get("/", listSupplementsController.handle);
supplementsRoutes.get("/:id", findSupplementController.handle);
supplementsRoutes.post("/", createSupplementsController.handle);
supplementsRoutes.put("/:id", updateController.handle);
supplementsRoutes.delete("/:id", deleteSupplementsController.handle);


export { supplementsRoutes };