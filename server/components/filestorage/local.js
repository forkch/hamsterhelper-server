
var os = require('os');
var path = require('path');
var fs = require('fs');

module.exports = {
  store: function(file, filename) {
    console.log('storing locally: ' + filename);

    var saveTo = path.join('images/hamsters', filename);
    console.log(saveTo);
    file.pipe(fs.createWriteStream(saveTo));
  }
}