'use strict';
module.exports = function (app) {
  app.get('/', function (req, res) {
    // TODO: Create render
    res.send('OK');
  });
  app.get('/download/:snippetId', function (req, res) {
    res.send('OK');
  });
}
