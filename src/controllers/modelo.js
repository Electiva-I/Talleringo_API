const pool = require('../settings/db');
const express = require('express');
const {response} = require('express');
const {create, _update, _delete} = require('../models/modelo');

const route = express.Router();

route.post('/create/', async(req, res)=>{
    const result = await create(req.body);
    res.json({"response" : result});
});

route.get('/select/', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.select_modelos()`);
    res.json(result);
});

route.get('/select_marca/:id_marca', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.select_modelos_marca(${req.params.id_marca})`);
    res.json(result);
});

route.get('/select_one/:id_modelo', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.select_one_modelo(${req.params.id_modelo})`);
    res.json(result);
})

route.put('/update/', async(req, res)=>{
    const result = await _update(req.body);
    res.json({"response" : result});
});

route.delete('/delete/:id_modelo', async(req, res)=>{
    const result = await _delete(req.params.id_modelo);
    res.json({"response" : result});
});

module.exports = route;