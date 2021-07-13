'use strict';
const express = require('express');
const app = express();
const jayChat = require('./app');
const connectDB = require('./app/config');

let Port = process.env.port || 4000;

// Database connection
connectDB();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', jayChat.router);
app.listen(Port, () => {
  console.log(`JayCHAT running on Port: ${Port}...`);
});
