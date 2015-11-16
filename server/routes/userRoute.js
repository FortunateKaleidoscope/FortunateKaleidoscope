'use strict';
// /api/user route
var userController = require('../controller/userController');
var authMiddleware = require('../config/authMiddleware').authMiddleware;
var confirmUserSnippet = require('../config/authMiddleware').confirmUserSnippet;

module.exports = function (app) {
  app.get('/:username', userController.userPage);
  app.get('/:username/download', authMiddleware, userController.downloadSnippets);
  app.get('/:username/:snippetID', confirmUserSnippet, userController.getUserSnippet);
  app.post('/:username/:snippetID', confirmUserSnippet, userController.updateSnippet);
};
