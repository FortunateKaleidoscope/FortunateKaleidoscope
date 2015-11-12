'use strict';
var dummyData = require('../../test/dummyData');

module.exports = {
  getSnips: function (req, res) {
    res.json(dummyData);
  },
  searchSnips: function (req, res) {
    // TODO: Search snips by tag
    res.send(201);
  }
};
