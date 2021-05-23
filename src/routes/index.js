const express = require("express"),
path = require("path"),
app = express.Router()
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger/swagger.json');

const user = require('../controllers/users');
const cars = require('../controllers/cars');
const maintenance = require('../controllers/maintenance');
const marcas = require('../controllers/marcas');
const modelos = require('../controllers/modelo');
const historial = require('../controllers/historial');
const paso_autos = require('../controllers/paso_autos');
const sync = require('../controllers/sync');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", user);

app.use("/cars", cars);

app.use("/maintenance", maintenance);

app.use("/marcas", marcas);

app.use("/modelos", modelos)

app.use("/historial", historial);

app.use("/paso_autos", paso_autos);

app.use("/sync", sync);

module.exports = app;

