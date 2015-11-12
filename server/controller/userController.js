'use strict';
var writeSnippet = require('../lib/helpers').writeSnippet;
var dummyData = require('../../test/dummyData')

module.exports = {
  userPage: function (req, res) {
    console.log('Recieved userID: ', req.params.userID);
    res.send(req.params.userID);
  },
  createSnippet: function (req, res) {
    // TODO: receive snippet, save to DB
    // writeSnippet(req).then(function (data) {
    //   res.send(201);
    // });
    dummyData.push(req.body);
    res.json(dummyData);
  }
};
