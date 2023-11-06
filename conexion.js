const express = require("express");
const path = require("path");

const mysql = require("mysql");

const app = express();

let conexion =mysql.createConnection({

  host: "localhost",
  database: "pqrs_db",
  user: "root",
  password: ""
});

app.set("view engine", "ejs"); //motor de vistas ejs

// se usan para codificar los datos que mandan los html
app.use(express.json());
//declarar las variables de un html para el js codificar los datos del html
app.use(express.urlencoded({extended:false}));


// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log("Servidor creado http://localhost:3000");
});

//este llamado validar se usa para guardar las variables del form en estas variables locales.
app.post("/validar", function (req, res) {
  const datos = req.body;

  let tipdoc = datos.tipodoc;
  let numdoc = datos.numerodoc;
  let nombCo = datos.nombreregistro;
  let corr = datos.correo;
  let celular = datos.celular;
  let contra = datos.passwordlogin;

});
