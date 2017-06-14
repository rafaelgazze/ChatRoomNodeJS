var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json({ type: 'application/json' }))


consign()
    .include('app/routes')
    .include('app/models')
    .include('app/controllers')
    .into(app);

module.exports = app;