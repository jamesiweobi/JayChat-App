'use strict';

const routes = require('../routes');

const router = require('express').Router();

let _registerRoutes = (routes, method) => {
  for (let key in routes) {
    if (
      typeof routes[key] === 'object' &&
      routes[key] !== null &&
      !(routes[key] instanceof Array)
    ) {
      _registerRoutes(routes[key], key);
    } else {
      //Register the routes
      if (method === 'GET') {
        router.get(key, routes[key]);
      } else if (method === 'POST') {
        router.post(key, route[key]);
      } else {
        router.use(routes[key]);
      }
    }
  }
};

let route = (routes) => {
  _registerRoutes(routes);
  return router;
};

module.exports = { route };
