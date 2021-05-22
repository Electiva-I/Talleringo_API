const pool = require('../settings/db');
const express = require('express');
const {response} = require('express');
const {create, _update} = require('../models/marcas');

const route = express.Router();

route.post('/create/', async(req, res)=>{
    const result = await create(req.body);
    res.json({"response" : result});
});

route.get('/select/', async(req, res)=>{
    const result = await pool.query('select * from marcas_vehiculos where isCustom != 1');
    res.json(result);
});

route.put('/update/', async(req, res)=>{
    const result = await _update(req.body);
    res.json({"response" : result});
});

route.delete('/delete/:id_marca', async(req, res)=>{
    const result = await pool.query(`delete from marcas_vehiculos where id_marca = ${req.params.id_marca}`);
    res.json({"response" : result});
});

module.exports = route;

