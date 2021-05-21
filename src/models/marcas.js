const pool = require('../settings/db');

const create = async(data)=>{
    let {nombre_marca, fabricante, isCustom} = data;

    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_marca('${nombre_marca}', '${fabricante}', ${isCustom})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const _update = async(data)=>{
    let {id_marca, nombre_marca, fabricante} = data;

    try{
        await pool.query(`call heroku_ef3e73c2884083e.update_marca(${id_marca}, '${nombre_marca}', '${fabricante}')`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {
    create,
    _update
}