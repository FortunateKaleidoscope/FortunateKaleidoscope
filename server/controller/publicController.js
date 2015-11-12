var utils = require('../lib/utils');

module.exports = {
  downloadSnippet: function (req, res) {
    // getSnippet(req.params.)
    //    .then(writeSnippetFile)
    //    .then(zipFolder)
    //    .then(function(filePath, fileName) {
    //      res.download(filePath, fileName)
    //    });
    // res.download('OK')
    res.send('OK');
  }
}
