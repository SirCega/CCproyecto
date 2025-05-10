import express from"express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
import empleadoRoutes from "./routes/empleadosRoutes.js"
import clienteRoutes from "./routes/cliente.routes.js"
import productoRoutes from "./routes/productos.routes.js"

const app = express();

app.use(express.json());//MIDLEWARE

app.set("port",5000)

app.use(cors())  ;  
/*Routes     */
app.use("/api/categorias",categoriaRoutes)
app.use("/api/empleados",empleadoRoutes)
app.use("/api/clientes",clienteRoutes)
app.use("/api/productos",productoRoutes)

app.get("/", (req,res)=>{
    res.send("Rest API en RENDER Without database endpoints")
})


export default app;     