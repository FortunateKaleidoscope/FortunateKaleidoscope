'use strict';
var getSnippet = require('../lib/helpers').getSnippet;
// Checks to see if user is authenticated
exports.authMiddleware = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
};

// Check to see if snippet belongs to user
exports.confirmUserSnippet = function (req, res, next) {
  var snippetID = req.params.snippetID;
  var username = req.params.username;
  if (req.params.username !== req.user.username) {
    console.log('usernames don\'t match');
    res.redirect('/');
  } else {
    getSnippet(parseInt(snippetID)).then(function (snip) {
      var snipJSON = snip.toJSON();
      if (username === snip.user.username) {
        req.snippetJSON = snip;
        // req.snip = snip
        next();
      } else {
        res.redirect('/');
      }
    }).catch(function (err) {
      res.redirect('/');
    });
  }
};
