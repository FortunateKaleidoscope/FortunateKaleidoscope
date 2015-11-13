'use strict';
var passport = require('../passport');
var authController = require('../../controller/authController');

module.exports = function (app) {
  app.get('/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }),
    authController.githubAuth
  );
  app.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    authController.githubAuthCallback
  );
  app.get('/logout', authController.logout);
}
