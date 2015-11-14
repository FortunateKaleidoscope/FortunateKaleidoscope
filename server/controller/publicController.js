'use strict';
var utils = require('../lib/utils');
var helpers = require('../lib/helpers');

// /download/:snippetID

// Takes the snippet ID and does a look up
// when it finds the Snippet, it writes it to file, then sends it out as a download
module.exports = {
  downloadSnippet: function (req, res) {
    var snippetID = req.params.snippetId;
    helpers.getSnippet(snippetID)
           .then(function (result) {
            //  utils.writeSnippetFile(result, )
           })
           .catch(function (err) {
             res.redirect('/');
           });
  }
}
