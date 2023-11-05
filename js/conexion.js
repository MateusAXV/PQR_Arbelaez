var mysql = require('mysql');

var conexion = mysql.createConnection({

    host: 'localhost',
    database: 'pqrs_db',
    user: 'root',
    password: ''
});

conexion.connect(function (error) {

    if (error) {
        throw error;
    } else {
        console.log('Conexion Exitosa');
    }
});

conexion.query('SELECT * FROM registros', function (error, results, fields) {
    if (error) throw error;   // Si hay un error en la consulta SQL
    results.forEach(result => {
        console.log(result)
    });
});

conexion.end();
// No borrar