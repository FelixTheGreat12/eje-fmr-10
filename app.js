// npm init -y
// npm i express
// Servioder
const express = require("express");
const app = express();
//Configuracion
// Busque en la carpeta public en index.html
app.use(express.static('public'))

app.get("*",(req,res)=> {
    res.send("En teoria 404.html")
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('El servidor corriendo en el puerto',port);
});