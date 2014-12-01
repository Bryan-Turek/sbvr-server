var debug = require('debug')('boot:create-model-instances');

module.exports = function(app) {
  var User = app.models.account;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Document = app.models.document;

  User.create([
    {
      name: 'Bryan Turek',
      email: 'turek.bryan@gmail.com',
      password: 'testing',
      created: new Date(),
      modified: new Date()
    },
    {
      name: 'Ian Stavros',
      email: 'ianstavros@gmail.com',
      password: 'testing',
      created: new Date(),
      modified: new Date()
    },
    {
      name: 'Nick Stavros',
      email: 'nick@drstavros.com',
      password: 'testing',
      created: new Date(),
      modified: new Date()
    },
    {
      name: 'Gianpiero Napoli',
      email: 'gianpiero@rti.com',
      password: 'testing',
      created: new Date(),
      modified: new Date()
    }
  ], function(err, users) {
    if (err) return debug('%j', err);
    debug(users);
    //create document 1 and make all users
    Document.create({
      title: 'CFR Title',
      description: 'test document',
      users: users
    }, function(err, document) {
      if(err) return debug(err);
      debug(document);

      users.forEach(function(user) {
        user.documents.add(document, function(err){
          if(err) return debug(err);
        });
      });

      document.blocks.create({
        title: 'General Provisions',
        source: '/CFR Title'
      }, function(err, block) {
        if(err) return debug(err);
        debug(block);

        block.sections.create({
          title: 'Administrative Committee of the Federal Register',
          source: '/CFR Title'
        }, function(err, section) {
          // console.log(err);
          if(err) return debug(err);
          debug(section)

        });
      });
    });

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return debug(err);
      debug(role);
      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  });
};
