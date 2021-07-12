'use strict';
const express = require('express');
const app = express();
const jayChat = require('./app');

let Port = process.env.port || 4000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', jayChat.router);
app.listen(Port, () => {
  console.log(`JayCHAT running on Port: ${Port}...`);
});
