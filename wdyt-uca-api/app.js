var express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("./config/mongoose"); //obteniendo las configuraciones de la base 
const apiRouter = require('./routes/api/index.router');

var app = express();
mongoose.connect(); //Luego de inicializar el servicio se hace la conexión a la base de datos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apiRouter);

module.exports = app;
