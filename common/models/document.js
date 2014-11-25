var crypto = require('crypto');

module.exports = function(Document) {
    Document.definition.properties.revision.default = function() {
      return crypto.createHash('md5').update((new Date()).toString()).digest('hex');
    }
    Document.definition.properties.created.default = function() {
      return new Date();
    }
    Document.definition.properties.modified.default = function() {
      return new Date();
    }
}
