'use strict';
var writeSnippet = require('../lib/helpers').writeSnippet;
var helpers = require('../lib/helpers');
var utils = require('../lib/utils');
var dummyData = require('../../test/dummyData');

module.exports = {
  userPage: function (req, res) {
    var username = req.url.slice(1);
    helpers.getSnippetsByUser(username, function (err, result) {
      if (err) {
        console.error(err);
      } else {
        res.json(result);
      }
    });
    
  },
  downloadSnippets: function (req, res) {
    // TODO: do a look up on the snippets table for users id
    // write all of them to file
    // zip it up
    // res.download
    res.sendStatus(200);
  }
};
