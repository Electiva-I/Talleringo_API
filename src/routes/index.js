const express = require("express"),
path = require("path"),
app = express.Router()
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger/swagger.json');

const user = require('../controllers/users');
const cars = require('../controllers/cars');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", user);

app.use("/cars", cars);

module.exports = app;

