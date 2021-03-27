const pool = require("../settings/db");
const express = require("express");
const {create, delete_} = require('../models/user');



const route = express.Router();


route.get('/', async (req, res)=>{
    const result = await pool.query("select * from usuario");
    res.json(result);
});

route.get('/:id', async (req, res)=>{
    const result = await pool.query(`select * from usuario where id_usuario =${req.params.id}`);
    res.json(result);
});

route.post('/', async (req, res)=>{
    let response = await create(req.body);
    res.json({"response":response});
});

route.delete('/:id', async (req, res)=>{
    let response = await delete_(req.params.id);
    res.json({"response":response});
});

module.exports = route;