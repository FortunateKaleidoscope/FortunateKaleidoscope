'use strict';
var writeSnippet = require('../lib/helpers').writeSnippet;

module.exports = {
  userPage: function (req, res) {
    // TODO: Do a lookup on the user
    res.send(req.params.username);
  },
};
