// TODO: Fetch data from user
'use strict';
var authMiddleware = require('../authMiddleware');


module.exports = function (app) {
  app.get('/:userID', authMiddleware, function(req, res) {
    console.log('Recieved userID: ', req.params.userID);
    res.send(req.params.userID);
  });
}
