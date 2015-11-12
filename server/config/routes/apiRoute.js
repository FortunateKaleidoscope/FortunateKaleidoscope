'use strict';
// /api route
var apiController = require('../../controller/apiController');

module.exports = function (app) {
  app.get('/topten', apiController.getTopTen);
  app.post('/search', apiController.searchSnips);
  // /api/user
}
