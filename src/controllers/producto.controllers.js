import getConnection from "./../db/database.js"

const getProductos = async (req,res)=>{
    try {
        const connection = await getConnection();
        const [rows] = await connection.query(`SELECT 
                p.ProductoID,
                p.ProductoNombre,
                p.ProveedorID,
                c.CategoriaNombre,
                p.CantidadPorUnidad,
                p.PrecioUnitario,
                p.UnidadesStock,
                p.UnidadesPedidas,
                p.NivelReorden,
                p.Discontinuado
            FROM productos p
            INNER JOIN categorias c ON p.CategoriaID = c.CategoriaID `);
        res.json(rows); 

    } catch (error) {
        console.error("ERROR 500");
        
    }   
    
}

const updateProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            ProductoNombre,
            ProveedorID,
            CategoriaID,
            CantidadPorUnidad,
            PrecioUnitario,
            UnidadesStock,
            UnidadesPedidas,
            NivelReorden,
            Discontinuado
        } = req.body;

        const producto = {
            ProductoNombre,
            ProveedorID,
            CategoriaID,
            CantidadPorUnidad,
            PrecioUnitario,
            UnidadesStock,
            UnidadesPedidas,
            NivelReorden,
            Discontinuado
        };

        const connection = await getConnection();
        const [result] = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);

        res.status(200).json({
            message: "Producto actualizado correctamente",
            affectedRows: result.affectedRows
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
}

export const methodHTTP ={
    getProductos,
    updateProductos
}