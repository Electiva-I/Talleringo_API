const pool = require('../settings/db');

const create = async(data) =>{
    let {id_vehiculo_usuario, detalle,
        fecha_programado} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.proc_create_mantenimiento(${id_vehiculo_usuario}, '${detalle}', '${fecha_programado}')`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};

module.exports = {
    create
}