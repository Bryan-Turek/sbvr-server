var crypto = require('crypto');

module.exports = function(Section) {

  //Create default revision
  Section.definition.properties.revision.default = function() {
    return crypto.createHash('md5').update((new Date()).toString()).digest('hex');
  }
}
