var express = require('express');
var bodyParserver = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());process.env.NODE_ENV = 'development';
