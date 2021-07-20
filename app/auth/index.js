'use strict';
const passport = require('passport');
const config = require('config');
const FacebookStrategy = require('passport-facebook').Strategy;
const { findOne, createNewUser, findById } = require('../helpers');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    findById(id)
      .then((user) => done(null, user))
      .catch((error) => console.log('Error when decentralizing the user'));
  });
  let authProcessor = (accessToken, refreshToken, profile, done) => {
    // Find a user in the db using profile.id
    findOne(profile.id).then((result) => {
      if (result) {
        // If the user is found, return the user data using the done()
        done(null, result);
      } else {
        // If the user is not found, create one in the local db and return
        createNewUser(profile)
          .then((newChatUser) => done(null, newChatUser))
          .catch((error) => console.log('Error creating new User'));
      }
    });
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};
