const pool = require('../settings/db');

const create = async (data) =>{
    let {id_modelo, id_usuario, url_img, anio, uuid} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.create_vehiculo_usuario(${id_modelo}, ${id_usuario}, '${url_img}', '${anio}', '${uuid}');`);
        return true;
    }catch(e) {
        console.log(e);
        return false;
    }
    
};

const delete_ = async (id) =>{
    try {
        await pool.query(`call heroku_ef3e73c2884083e.update_state_car_user(${id})`);
        return true;
    } catch (error) {
        console.log(error);
        return false;        
    }

};

const update =  async(data) =>{
    let {id_vehiculo_usuario, id_modelo, url_img, anio} = data;
    try{
        await pool.query(`call heroku_ef3e73c2884083e.update_vehiculo_usuario(${id_vehiculo_usuario}, ${id_modelo}, '${url_img}', '${anio}')`);
        return true;
    }catch(e){
        console.log(e);
        return false;
    } 
}


module.exports = {
    create,
    delete_,
    update
}