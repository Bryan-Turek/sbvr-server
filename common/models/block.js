var crypto = require('crypto');

module.exports = function(Block) {
  Block.definition.properties.revision.default = function() {
    return crypto.createHash('md5').update((new Date()).toString()).digest('hex');
  }
  Block.definition.properties.created.default = function() {
    return new Date();
  }
  Block.definition.properties.modified.default = function() {
    return new Date();
  }
}
