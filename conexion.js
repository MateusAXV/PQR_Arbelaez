const express = require("express");
const path = require ("path");

const mysql = require("mysql");

const app = express();


let conexion = mysql.createConnection({
  host: "localhost",
  database: "pqrs_db",
  user: "root",
  password: "",
});

app.set("view engine", "ejs"); //motor de vistas ejs

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "/public")));

//RUTA de página index
app.get('/',(req,res)=>{
res.render("index");
});

//Ruta de registro
app.get('/registro', (req, res) => {
  res.render("registro");
});

// se usan para codificar los datos que mandan los html
app.use(express.json());
//declarar las variables de un html para el js codificar los datos del html
app.use(express.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Servidor creado http://localhost:3000");
});

//este llamado validar se usa para guardar las variables del form en estas variables locales.
app.post("/registrar", function (req, res) {
  const datos = req.body;

  let tipdoc = datos.tipodoc;
  let numdoc = datos.numerodoc;
  let nombCo = datos.nombreregistro;
  let corr = datos.correo;
  let celular = datos.celular;
  let contra = datos.passwordlogin;

  let buscarprimarykey = "SELECT * FROM registros WHERE Numero_documento = " + numdoc + " ";

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
            console.log("Datos almacenados");
            res.redirect("/"); // Puedes redirigir a la página principal o a otra página después de un registro exitoso
          }
        });
      }
    }
  });
});
