'use strict';
var passport = require('../passport');

module.exports = function (app) {
  app.get('/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }),
    function(req, res){}
  );
  app.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      // TODO: Get user id, redirect to user page
      res.redirect('/');
  });
}
