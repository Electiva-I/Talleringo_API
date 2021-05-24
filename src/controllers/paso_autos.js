const pool = require('../settings/db');
const express = require('express');
const {response} = require('express');
const route = express.Router();

var autos;
var marcas = [];
route.post('/llenar/', async(req, res)=>{
    var request = require('request');
    request('https://private-anon-bd4bad5250-carsapi1.apiary-mock.com/cars', function (error, response, body) {
        autos = JSON.parse(body)
        for(var i = 0; i<autos.length; i++){
            if(!marcas.includes(autos[i].make)){
                marcas.push(autos[i].make);
                pool.query(`call heroku_ef3e73c2884083e.create_marca('${autos[i].make}', '${autos[i].make}')`);
            }
        }

        for(var i = 0; i<autos.length; i++){
            pool.query(`call heroku_ef3e73c2884083e.insertar_modelos('${autos[i].model}', '${autos[i].make}')`);
        }

        res.json({"response" : true});

        console.log(marcas); 
        
    });
});

module.exports = route;
