'use strict';
var writeSnippet = require('../lib/helpers').writeSnippet;
var utils = require('../lib/utils');

module.exports = {
  userPage: function (req, res) {
    // TODO: Do a lookup on the user
    res.send(req.params.username);
  },
  downloadSnippets: function (req, res) {
    // TODO: do a look up on the snippets table for users id
    // write all of them to file
    // zip it up
    // res.download
    res.sendStatus(200)
  }
};
