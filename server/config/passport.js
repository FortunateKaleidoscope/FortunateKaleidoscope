'use strict';
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;

// Setting API keys
if (process.env.NODE_ENV === 'production') {
  var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  var CALLBACK_URL = 'https://safe-depths-6699.herokuapp.com/auth/github/callback'
} else {
  var GITHUB_CLIENT_ID = require('../lib/secrets').GITHUB_CLIENT_ID;
  var GITHUB_CLIENT_SECRET = require('../lib/secrets').GITHUB_CLIENT_SECRET;
  var CALLBACK_URL = "http://localhost:3000/auth/github/callback";
}

// Does a findOrCreate on user and returns a promise
var getUser = require('../lib/helpers').getUser;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    // Passport's code
    process.nextTick(function () {
      // We get user then pass it to done
      getUser(profile).then(function(user) {
        done(null, user);
      }).catch(function(err) {
        console.log(err);
      });
    });
  }
));

module.exports = passport;
