const express = require("express");

const app = express();

// app.get("/", function(req,res){
//     res.render('hola a todos');
// });

app.use(express.static("public"));

app.listen(3000,function(){

    console.log("servidor creado http://localhost:3000");
});