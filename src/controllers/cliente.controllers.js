import getConnection from "./../db/database.js"

const getClientes = async (req,res)=>{
    try {
        const connection = await getConnection();
        const [rows] = await connection.query("SELECT ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax FROM clientes");
        res.json(rows); 

    } catch (error) {
        console.error("ERROR 500");
        
    }   
    
}
const postClientes = async(req,res) =>{
    try{
        const {ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax} = req.body;
        const cliente = {ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente );
        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
        
    }   
}

export const methodHTTP ={
    
    postClientes,
    getClientes
}