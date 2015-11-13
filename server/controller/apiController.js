'use strict';
var dummyData = require('../../test/dummyData');
var helpers = require('../lib/helpers');

module.exports = {
  getTopTen: function (req, res) {
    // TODO: get top ten results
    res.json(dummyData);
  },
  searchSnips: function (req, res) {
    // TODO: Search snips by tag
    res.send(201);
  },
  writeSnippet: function (req, res) {
    helpers.writeSnippet(req, function(err, post) {
      if (err) {
        res.sendStatus(501);
      } else {
        res.json(post);
      }
    });
  }
};
