'use strict';
var authMiddleware = require('../authMiddleware');
var userController = require('../../controller/userController');


module.exports = function (app) {
  app.get('/:userID', userController.userPage);
  app.post('/createSnippet', authMiddleware, userController.userPage);
};
