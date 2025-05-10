import{Router} from "express";
import { methodHTTP as clienteController} from "../controllers/cliente.controllers.js";

const router = Router();

router.get( "/", clienteController.getClientes)
router.post( "/", clienteController.postClientes)
//router.get( "/:id", categoriaController.getCategory)
//router.delete( "/:id", categoriaController.deleteCategory)
//router.put( "/:id", categoriaController.updateCategorias)


export default router ; 