'use strict';
var writeFile = require('./promises').writeFile;
var sublimeSnippetTemplate = require('./sublimeSnippetGenerator');
var mkpathAsync = require('./promises').mkpathAsync;
var path = require('path');
var del = require('del');

// Takes outFolder generated when request is made
// makes the path then writes a generated znippet to the folder
// returned as a promise.
var writeSnippetFile = function (snipObj, outFolder) {
  var fileName = escape(snipObj.title) + '.sublime-snippet';
  var filePath = outFolder + fileName;
  return mkpathAsync(outFolder).then(function () {
    return writeFile(filePath,
      sublimeSnippetTemplate(snipObj),
      'utf8').then(function () {
        return {filePath: filePath, fileName: fileName};
      });
  });
};


var cleanFolder = function (folderPath) {
  return del(folderPath + '/**');
};

module.exports = {
  writeSnippetFile: writeSnippetFile,
  zipFolder: require('./promises').zipFolder,
  cleanFolder: cleanFolder
};
