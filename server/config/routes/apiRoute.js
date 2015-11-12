'use strict';
var apiController = require('../../controller/apiController');

module.exports = function (app) {
  app.get('/snippets', apiController.getSnips);
  app.post('/search', apiController.searchSnips);
}
