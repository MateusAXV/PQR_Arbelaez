const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send('hola a todos');
});

app.listen(3000,function(){

    console.log("servidor creado http://localhost:3000");
});

// app.post("/validar", function(req,res){

//     const datos = req.body;
//     console.log(datos);
// });