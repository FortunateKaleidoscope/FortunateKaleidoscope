'use strict';
var authMiddleware = require('../authMiddleware');
var userController = require('../controllers/userController');


module.exports = function (app) {
  app.get('/:userID', authMiddleware, userController.userPage);
  app.post('/createSnippet', authMiddleware, userController.userPage);
};
