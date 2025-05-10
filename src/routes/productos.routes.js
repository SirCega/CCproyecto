import{Router} from "express";
import { methodHTTP as productoController} from "../controllers/producto.controllers.js";

const router = Router();

router.get( "/", productoController.getProductos)
//router.post( "/", categoriaController.postCategorias)
//router.get( "/:id", categoriaController.getCategory)
//router.delete( "/:id", categoriaController.deleteCategory)
router.put( "/:id", productoController.updateProductos)


export default router ; 