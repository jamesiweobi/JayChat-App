'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectionDB = require('../config');

if (process.env.NODE_ENV === 'production') {
  //
  module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongooseConnection: connectionDB(),
    }),
  });
} else {
  // initialize session with session secret
  module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  });
}
