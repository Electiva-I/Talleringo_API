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

const update = async(data)=>{
    let {id_programado, detalle,
        fecha_programado} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.proc_update_mantenimiento(${id_programado}, '${detalle}', '${fecha_programado}')`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const _delete = async(id_programado)=>{
    try{
        await pool.query(`call heroku_ef3e73c2884083e.proc_delete_mantenimiento(${id_programado})`);
        return true;
    }catch(e){
        return false;
    }
}

module.exports = {
    create,
    update,
    _delete
}