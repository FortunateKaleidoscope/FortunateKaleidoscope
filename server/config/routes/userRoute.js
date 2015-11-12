// TODO: Fetch data from user
'use strict';

module.exports = function (app) {
  app.get('/:userID', function(req, res) {
    console.log('Recieved userID: ', req.params.userID);
    res.send(req.params.userID);
  });
}
