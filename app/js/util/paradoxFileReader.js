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

    // Store the filename for this reader.
    this.file = file;

    // Store each line of the file as an array.
    this.storage = [];

    var reader = lineReader.createInterface({
      input: fs.createReadStream(file)
    });

    // Read each line to our storage array one by one.
    reader.on('line', (line) => {
      self.storage.push(line);
    });

    // When we're done, and the file closes, parse the storage array.
    reader.on('close', () => {
      this.parseContents();
    });
  }

  /**
   * Parse the contents of a Paradox file.
   */
  parseContents() {
    for (var i = 0; i < this.storage.length; i++) {
      // Stop caring about anything after the first # on any line. Strip extra whitespace.
      var line = this.storage[i].split('#', 1)[0];

      // If the line started with a comment, or was blank, ignore it.
      if (line.length < 1) {
        continue;
      }

      var opener = new RegExp('([a-zA-Z_]+)\s*?=', 'g');
      var middle = new RegExp('([^{^}]*)', 'g');
      var closer = new RegExp('}', 'g');

      var openers = opener.exec(line);
      var x = 5;
    }
  }
}

module.exports = {
  ParadoxFileReader: ParadoxFileReader
}
