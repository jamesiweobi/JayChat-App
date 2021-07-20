'use strict';

const routes = require('../routes');
const db = require('../db');
const { resolveInclude } = require('ejs');
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

// FInd a SIngle user
let findOne = (profileId) => {
  return db.userModel.findOne({
    profielId: profileId,
  });
};

let createNewUser = (profile) => {
  return new Promise((resolve, reject) => {
    let newChatUser = new db.userModel({
      profileId: profile.id,
      fullname: profile.displayName,
      profilePic: profile.photos[0].value || '',
    });

    newChatUser.save((error) => {
      if (error) reject(error);
      resolveInclude(newChatUser);
    });
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    db.userModel.findById(id, (error, user) => {
      if (error) reject(error);
      resolve(user);
    });
  });
};
module.exports = { route, findOne, createNewUser, findById };
