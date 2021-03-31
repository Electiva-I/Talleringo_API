const pool = require('../settings/db');

const create = async (data) =>{
    let {id_modelo, id_usuario, url_img, anio} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_vehiculo_usuario(${id_modelo}, ${id_usuario}, '${url_img}', '${anio}');`);
        return true;
    }catch(e) {
        console.log(e);
        return false;
    }
    
};

const delete_ = async (id) =>{
    try {
        await pool.query(`delete from vehiculo_usuario where id_vehiculo_usuario = ${id}`);
        return true;
    } catch (error) {
        return false;        
    }

};

const update =  async(data) =>{
    let {id_vehiculo_usuario, id_modelo, url_img, anio} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.update_vehiculo_usuario(${id_vehiculo_usuario}, ${id_modelo}, '${url_img}', '${anio}')`);
        return true;
    }catch(e){
        return false;
    } 
}


module.exports = {
    create,
    delete_,
    update
}