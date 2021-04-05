const pool = require('../settings/db');
const express = require("express");
const { response } = require('express');
const {create, update, _delete} = require("../models/maintenance");

const route = express.Router();

route.get('/select_actives/:id', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.proc_mantenimientos_usuario(${req.params.id})`);
    res.json(result);
});

route.get('/select_inactives/:id', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.mantenimientos_inactivos(${req.params.id})`);
    res.json(result);
});

route.post('/create/', async (req, res)=>{
    const result = await create(req.body);
    res.json({"response" : result});
});

route.put('/update/', async (req, res)=>{
    const result = await update(req.body);
    res.json({"response" : result});
});

route.delete('/delete/:id_programado', async (req, res)=>{
    const result = await _delete(req.params.id_programado);
    res.json({"response" : result});
})

module.exports = route;