const pool = require("../settings/db");
const express = require("express");
const { delete_, create, update} = require("../models/cars");

const route = express.Router();

route.get('/select/:id_user', async(req, res)=>{
    const result = await pool.query(`select * from vehiculo_usuario where id_usuario = ${req.params.id_user}`);
    res.json(result);
});

route.post('/create', async (req, res)=>{
    let response = await create(req.body);
    res.json({"response": response});
});

route.delete('/delete/:id_vehiculo_usuario', async(req, res)=>{
    let response = await delete_(req.params.id_vehiculo_usuario);
    res.json({"response" : response});
});

route.put('/update/', async(req, res)=>{
    let response = await update(req.body);
    res.json({"response" : response});
})



module.exports = route;
