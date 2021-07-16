'use strict';
const passport = require('passport');
const config = require('config');
const FacebookStrategy = require('passport-facebook').Strategy;
let authProcessor = (accessToken, refreshToken,profile,done)=>{
        User.findOrCreate(..., (err, user)=>{
      if (err) { return done(err); }
      done(null, user);
    });
  }
module.exports=()=>{
  passport.use(new FacebookStrategy(config.fb,authProcessor))
}