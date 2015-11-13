'use strict';
module.exports = {
  githubAuth: function (req, res) { },
  githubAuthCallback: function (req, res) {
    res.cookie('isAuth', true);
    res.redirect('/');
  }
};
