'use strict';
var publicController = require('../../controller/publicController')

module.exports = function (app) {
  // app.get('/', publicController.rootPath);
  app.get('/download/:snippetId', publicController.downloadSnippet);
}
