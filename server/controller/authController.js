'use strict';
module.exports = {
  githubAuth: function (req, res) { },
  githubAuthCallback: function (req, res) {
    res.cookie('username', req.user.username);
    res.redirect('/');
  },
  logout: function (req, res) {
    req.logout();
    res.clearCookie('username');
    res.redirect('/')
  }
};
