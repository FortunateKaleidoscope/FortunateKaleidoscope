var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var archiver = require('archiver');
var mkpath = require('mkpath')
var writePathZip = path.join(__dirname + '/../zip/')
// Zip Folder
  // Takes a srcPath which is where all of the user's snippets live
  // passes out the filePath for zip when done.
var zipFolder = function (srcPath) {

  return new Promise(function (resolve, reject) {
    var outPath = writePathZip + Date.now() + '.zip';
    var output = fs.createWriteStream(outPath);
    var zipArchiver = archiver('zip');

    output.on('close', function () {
      resolve(outPath);
    });

    zipArchiver.pipe(output);

    zipArchiver.bulk([
      { src: [ '**/*' ], cwd: srcPath, expand: true }
    ]);

    zipArchiver.finalize(function(err, bytes) {
      if(err) {
        reject(err);
      }
      console.log('done:', base, bytes);
    });
  });
};


module.exports = {
  writeFile: Promise.promisify(fs.writeFile),
  zipFolder: zipFolder,
  mkpathAsync: Promise.promisify(mkpath)

}
