const mysql = require('mysql');
//mysql://bf092fb5070cec:209fbe46@us-cdbr-east-03.cleardb.com/heroku_ef3e73c2884083e?reconnect=true
const connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bf092fb5070cec',
    password: "209fbe46",
    database: 'heroku_ef3e73c2884083e',
    port: '3306',
    insecureAuth : true
});

/*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'islam',
    password: "nscsp a7217",
    database: 'talleringo_db',
    port: '3306',
    insecureAuth : true
});*/
connection.query('select 1 + 1', (err, rows) => { /* */ });
module.exports = connection;

