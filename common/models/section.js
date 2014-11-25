var crypto = require('crypto');

module.exports = function(Section) {
  Section.definition.properties.revision.default = function() {
    return crypto.createHash('md5').update((new Date()).toString()).digest('hex');
  }
  Section.definition.properties.created.default = function() {
    return new Date();
  }
  Section.definition.properties.modified.default = function() {
    return new Date();
  }
}
