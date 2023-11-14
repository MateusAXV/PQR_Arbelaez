const express = require("express");
const mysql = require("mysql");

const app = express();

const path = require("path");

let conexion = mysql.createConnection({
  host: "localhost",
  database: "pqr",
  user: "root",
  password: "",
});

app.listen(3000, function () {
  console.log("Servidor creado http://localhost:3000");
});

app.set("view engine", "ejs"); //motor de vistas ejs
// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "/public")));

//RUTA de página index
app.get("/", (req, res) => {
  res.render("index");
});

//Ruta de registro
app.get("/registro", (req, res) => {
  res.render("registro");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/formulario", (req, res) => {
  res.render("formulario");
});

// se usan para codificar los datos que mandan los html
app.use(express.json());
//declarar las variables de un html para el js codificar los datos del html
app.use(express.urlencoded({ extended: false }));

/////////////////////   CONSULTAS  /////////////////////////////////////////////////////////////////////////////

app.post("/llenartabla", function(req,res){
  conexion.query("SELECT * FROM tabla_pqrs", function (error, rows) {
    if (error) {
      throw error;
    } else {
      const datos = rows; 
      res.render("home", {datos});
    }
  });
});

//Validar inicio de sesión //Ruta de llegada de datos para el login.
app.post("/inicio", function (req, res) {
  const datoslogin = req.body;
  let numdoclogin = datoslogin.cedula_login;
  let contralogin = datoslogin.pass_login;

  let LoginQuery = `SELECT Numero_documento, Contraseña FROM registros WHERE Numero_documento = '${numdoclogin}' AND Contraseña = '${contralogin}'`;

  conexion.query(LoginQuery, function (error, row) {
    if (error) {
      throw error;
    } else {
      if (row.length > 0) {
        conexion.query("SELECT * FROM tabla_pqrs", function (error, rows) {
          if (error) {
            throw error;
          } else {
            const datos = rows; 
            res.render("home", {datos});
          }
        });
      } else {
        res.render("index", { errorlogin: "Datos no válidos" });
      }
    }
  });
});

//este llamado validar se usa para guardar las variables del form en estas variables locales.
// Ruta para poder ingresar los datos
app.post("/registrar", function (req, res) {
  const datosregistro = req.body;
  let tipdoc = datosregistro.tipodoc;
  let numdoc = datosregistro.numerodoc;
  let nombCo = datosregistro.nombreregistro;
  let corr = datosregistro.correo;
  let celular = datosregistro.celular;
  let contra = datosregistro.passwordlogin;

  let buscarprimarykey = `SELECT * FROM registros WHERE Numero_documento = ${numdoc};`

  conexion.query(buscarprimarykey, function (error, row) {
    if (error) {
      throw error;
    } else {
      if (row.length > 0) {
        // Error
        res.render("registro", { error: "Cédula duplicada" });
      } else {
        let registrar =
          "INSERT INTO registros (Tipo_documento, Numero_documento, Nombre_Completo, Correo, Celular, Contraseña) VALUES ('" +
          tipdoc +
          "','" +
          numdoc +
          "','" +
          nombCo +
          "','" +
          corr +
          "','" +
          celular +
          "','" +
          contra +
          "')";

        conexion.query(registrar, function (error) {
          if (error) {
            throw error;
          } else {
            res.render("registro", { check: "Registro exitoso" });
            console.log("Los datos: " + tipdoc + " " + numdoc + " " + nombCo + " " + corr + " " +  " " + celular + " se han registrado exitosamente")
          }
        });
      }
    }
  });
});

//Validar inicio de sesión //Ruta de llegada de datos para el login.
app.post("/enviarformulario", function (req, res) {
  const datosformulario = req.body;
  let tipopqrs = datosformulario.tipopqrs;
  let asunto = datosformulario.asunto;
  let mensajepqrs = datosformulario.mensajepqrs;

  let registrarformulario =
    "INSERT INTO tabla_pqrs (Tipo_Pqrs, Asunto, Mensaje) VALUES ('" +
    tipopqrs +
    "','" +
    asunto +
    "','" +
    mensajepqrs +
    "')";

  conexion.query(registrarformulario, function (error) {
    if (error) {
      throw error;
    } else {
      res.render("formulario", {formulariocheck: "Datos del formulario completados"});
    }
  });
});

// Control de errores de peticiones.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});