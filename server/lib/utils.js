'use strict';
var fs = require('fs');
var writeFile = require('./promises').writeFile;
var sublimeSnippetTemplate = require('./sublimeSnippetGenerator');
var path = require('path');
var del = require('del');
var archiver = require('archiver');

var writeSnippetFile = function (snipObj) {
  return writeFile(path.join(__dirname + "/../tmp/" + escape(snipObj.title) + ".sublime-snippet"),
    sublimeSnippetTemplate(snipObj),
    'utf8');
};

var zipFolder = function (srcPath, outPath, callback) {
  var output = fs.createWriteStream(outPath + 'out.zip');
  var zipArchiver = archiver('zip');
  output.on('close', function () {
    callback(outPath);
  });
  zipArchiver.pipe(output);
  zipArchiver.bulk([
    { src: [ '**/*' ], cwd: srcPath, expand: true }
  ]);
  zipArchiver.finalize(function(err, bytes) {
    if(err) {
      throw err;
    }
    console.log('done:', base, bytes);
  });
};

var cleanFolder = function (folderPath) {
  return del(folderPath + '/**');
};

module.exports = {
  writeSnippetFile: writeSnippetFile,
  zipFolder: zipFolder,
  cleanFolder: cleanFolder
};
