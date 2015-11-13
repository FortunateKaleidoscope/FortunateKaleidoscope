var Promise = require('bluebird');
var fs = require('fs');



module.exports = {
  writeFile: Promise.promisify(fs.writeFile),

}
