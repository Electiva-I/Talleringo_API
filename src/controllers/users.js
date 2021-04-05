const pool = require("../settings/db");
const express = require("express");
const {create, delete_} = require('../models/user');



const route = express.Router();


route.get('/select/', async (req, res)=>{
    const result = await pool.query("select * from usuario where estado = "+ 1);
    res.json(result);
});

route.get('/select_one/:id', async (req, res)=>{
    const result = await pool.query(`select * from usuario where id_usuario =${req.params.id}`);
    res.json(result);
});

route.post('/create/', async (req, res)=>{
    let response = await create(req.body);
    res.json({"response":response});
});

route.delete('/delete/:id', async (req, res)=>{
    let response = await delete_(req.params.id);
    res.json({"response":response});
});

module.exports = route;