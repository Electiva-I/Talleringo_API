const pool = require('../settings/db');
const express = require('express');
const {sync_up} = require('../models/sync');

const route = express.Router();

route.post('/sync_up/', async(req, res)=>{
    const result = await sync_up(req.body);
    res.json({result});
});

module.exports = route;
