'use strict';
// /api/user route
var userController = require('../../controller/userController');

module.exports = function (app) {
  app.get('/:username', userController.userPage);
  app.get('/:username/download', userController.downloadSnippets);
};
