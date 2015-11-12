'use strict';
// /user route
var userController = require('../../controller/userController');

module.exports = function (app) {
  app.get('/:username', userController.userPage);
};
