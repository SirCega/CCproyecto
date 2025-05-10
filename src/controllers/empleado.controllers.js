import getConnection from "./../db/database.js"

const getEmpleados = async (req,res)=>{
    try {
        const connection = await getConnection();
        const [rows] = await connection.query("SELECT EmpleadoID,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe,RutaFoto FROM empleados");
        res.json(rows); 

    } catch (error) {
        console.error("ERROR 500");
        
    }   
    
}

export const methodHTTP ={
    getEmpleados
    
}