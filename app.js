'use strict'

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var UUID = require('node-uuid');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/templates');

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('front end server running on 3000');
});
