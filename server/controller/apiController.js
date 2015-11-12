'use strict';
var dummyData = require('../../test/dummyData');

module.exports = {
  getTopTen: function (req, res) {
    // TODO: get top ten results
    res.json(dummyData);
  },
  searchSnips: function (req, res) {
    // TODO: Search snips by tag
    res.send(201);
  },
  topTen
};
