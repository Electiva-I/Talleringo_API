const pool = require('../settings/db');

const create = async(data)=>{
    let {id_vehiculo_usuario, detalle, fecha, costo, id_programado} = data;

    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_historial(${id_vehiculo_usuario}, '${detalle}', '${fecha}', ${costo}, ${id_programado})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};

module.exports = {
    create
}