'use strick';

if (process.env.NODE_ENV == 'production') {
  // Push producton stage config data
  module.exports = {
    host: process.env.host || '',
    dbURI: process.env.dbURI,
    sessionsSecret: process.env.sessionSecret,
    fb: {
      clientID: process.env.fbClientID,
      clientSecret: process.env.fbClientSecret,
      callbackURL: process.env.host + '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos'],
    },
  };
} else {
  // Push dev stage config data
  module.exports = require();
}
