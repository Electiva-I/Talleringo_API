const pool = require('../settings/db');

const create = async(data)=>{
    let {nombre_modelo, id_marca} = data;

    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_modelo('${nombre_modelo}', ${id_marca})`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {
    create};