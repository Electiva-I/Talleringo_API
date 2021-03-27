const mysql = require('mysql');
const {database} = require('./keys');
const {promisify} = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, con) => {
    if(err){
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.log("CONEXION CERRADA");
        }

        if (err.code == 'ECONNREFUSED') {
            console.log('CONEXION RECHAZADA');
        }
    }

    if (con) con.release();
    console.log("CONEXION ESTABLECIDA");
    return;       
});

pool.query = promisify(pool.query);
module.exports = pool;
