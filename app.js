var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongose
mongoose.connect('mongodb://localhost/nodejs',{useNewUrlParser: true});
var db = mongoose.connection;

app.get('/',function(req, res){
    res.send("Please use1 /api/books or /api/genre");
});

app.listen(3000);
console.log('Running on port 3000...');