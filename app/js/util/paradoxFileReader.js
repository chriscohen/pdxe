'use strict';

var lineReader = require('readline');
var fs = require('fs');

/**
 * Read a Paradox-style file.
 * 
 * @param {string} file The full path to the file.
 */
class ParadoxFileReader {
  constructor(file) {
    var self = this;
    console.log('constructor');
    this.file = file;
    this.storage = [];

    var reader = lineReader.createInterface({
      input: fs.createReadStream(file)
    });

    reader.on('line', (line) => {
      self.storage.push(line);
    });
  }

  getContents() {
    console.log('storage: ' + this.storage);
    return this.storage;
  }
}

module.exports = {
  ParadoxFileReader: ParadoxFileReader
}
