const express = require("express");
const app = express();
const Contenedor = require("./Contenedor");
const PORT = 8080;


app.get("/",(request, response)=>{
    response.send("<h1>HOLA MUNDO</h1>");
})
app.get("/productos",(request, response)=>{
    Contenedor.getAll("./productos.txt", response)
})
app.get("/productoRandom",(request, response)=>{
    Contenedor.getItemRandom("./productos.txt", response);
})


const server = app.listen(PORT,()=>{
    console.log("Servidor iniciado")
})

server.on("error", (error)=> console.log("Ocurrio un error", error));

