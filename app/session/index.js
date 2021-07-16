'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo');
const db = require('../db');
// const { Mongoose } = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  //In production session
  module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongooseConnection: db.Mongoose.connection,
    }),
  });
} else {
  // initialize session with session secret in development
  module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  });
}
