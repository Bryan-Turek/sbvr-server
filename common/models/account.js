module.exports = function(User) {

  User.definition.properties.created.default = function() {
    return new Date();
  }

  User.definition.properties.modified.default = function() {
    return new Date();
  }

};
