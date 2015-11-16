'use strict';
var publicController = require('../controller/publicController')

module.exports = function (app) {
  app.get('/download/:snippetId', publicController.downloadSnippet);
}
