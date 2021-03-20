const express = require("express"),
path = require("path"),
app = express.Router()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.resolve(__dirname,"./swagger/swagger.yaml"));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/index", (req, res)=>{
    res.send("HOLA")
});
module.exports = app;