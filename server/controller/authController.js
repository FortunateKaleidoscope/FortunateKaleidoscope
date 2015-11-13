'use strict';
module.exports = {
  githubAuth: function (req, res) { },
  githubAuthCallback: function (req, res) {
    res.cookie('isAuth', true);
    res.redirect('/');
  },
  logout: function (req, res) {
    req.logout();
    res.clearCookie('isAuth');
    res.redirect('/')
  }
};
