const pool = require('../settings/db');

const sync_up = async(data)=>{
    let {match_Data, payload} = data;

    try{
        return true
    }catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {
    sync_up
}