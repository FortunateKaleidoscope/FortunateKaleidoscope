'use strict';
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var GITHUB_CLIENT_ID = require('../lib/secrets').GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = require('../lib/secrets').GITHUB_CLIENT_SECRET;
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
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      getUser(profile).then(function(user) {
        done(null, user);
      }).catch(function(err) {
        console.log(err);
      });
    });
  }
));

module.exports = passport;
