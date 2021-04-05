const { response } = require('express');
const pool = require('../settings/db');


const create = async (data) =>{
    let {uuid} = data;
    try{
         await pool.query(`call heroku_ef3e73c2884083e.create_user('${uuid}');`);    
         return true;
    }catch(e) {
        return false;
    }
};

const delete_ = async (id) =>{    
    try{
         await pool.query(`call heroku_ef3e73c2884083e.update_state_user(${id})`);    
         return true;
    }catch(e) {
        console.log(e);
        return false;
    }
};



module.exports = {create, delete_};