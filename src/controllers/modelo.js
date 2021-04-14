const pool = require('../settings/db');
const express = require('express');
const {response} = require('express');
const {create} = require('../models/modelo');

const route = express.Router();

route.post('/create/', async(req, res)=>{
    const result = await create(req.body);
    res.json({"response" : result});
})

route.get('/select/', async(req, res)=>{
    const result = await pool.query(`call heroku_ef3e73c2884083e.select_modelos()`);
    res.json(result);
})

module.exports = route;