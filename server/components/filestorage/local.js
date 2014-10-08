
var os = require('os');
var path = require('path');
var fs = require('fs');

module.exports = {
  store: function(file, filename, finishFunction) {
    console.log('storing locally: ' + filename);

    var saveTo = path.join('images/hamsters', filename);
    console.log(saveTo);
    var dest = fs.createWriteStream(saveTo);
    dest.on('finish', finishFunction);
    file.pipe(dest);
  }
}