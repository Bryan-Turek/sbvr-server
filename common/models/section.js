var crypto = require('crypto');

module.exports = function(Project) {

  //Create default revision
  Project.definition.properties.revision.default = function() {
    return crypto.createHash('md5').update((new Date()).toString()).digest('hex');
  }
}
