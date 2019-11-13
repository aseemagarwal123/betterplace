// app.js
var express = require('express');
var app = express();
var db = require('./db');


RainfallRoute=require('../routes/RainfallRoute')
app.use('/v1/api/rainfall', RainfallRoute);



module.exports = app;
