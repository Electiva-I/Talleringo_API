const pool = require('../settings/db');
const express = require("express");
const { response } = require('express');
const {create} = require("../models/maintenance");

const route = express.Router();

route.get('/:id_user', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.proc_mantenimientos_usuario(${req.params.id_user})`);
    res.json(result);
});

route.post('/', async (req, res)=>{
    const result = await create(req.body);
    res.json({"response" : result});
})

module.exports = route;