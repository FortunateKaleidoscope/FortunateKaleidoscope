'use strict';
// /user route
var authMiddleware = require('../authMiddleware');
var userController = require('../../controller/userController');


module.exports = function (app) {
  app.get('/:username', userController.userPage);
  // app.get()
  app.post('/createSnippet', authMiddleware, userController.userPage);
};
