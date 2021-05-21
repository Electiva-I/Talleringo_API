const pool = require('../settings/db');

const create = async(data)=>{
    let {nombre_modelo, id_marca, isCustom} = data;

    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_modelo('${nombre_modelo}', ${id_marca}, ${isCustom})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const _update = async(data)=>{
    let {id_modelo, nombre_modelo, id_marca} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.update_modelo(${id_modelo}, '${nombre_modelo}', ${id_marca})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const _delete = async(id_modelo)=>{
    try{
        await pool.query(`call heroku_ef3e73c2884083e.delete_modelo(${id_modelo})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {
    create,
    _update,
    _delete    
};