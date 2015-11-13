'use strict';
var utils = require('../lib/utils');

module.exports = {
  downloadSnippet: function (req, res) {
    res.download(__dirname + '../test/download/snippet.txt.zip', 'snippet.txt.zip');
  }
}
