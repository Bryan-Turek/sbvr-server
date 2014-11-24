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
    });
    // users[0].projects.create({
    //   name: 'project1',
    //   balance: 100
    // }, function(err, project) {
    //   if (err) return debug(err);
    //   debug(project);
    //   //add team members
    //   Team.create([
    //     {ownerId: project.ownerId, memberId: users[0].id},
    //     {ownerId: project.ownerId, memberId: users[1].id}
    //   ], function(err, team) {
    //     if (err) return debug(err);
    //     debug(team);
    //   });
    // });

    //create project 2 and make jane the owner
    // users[1].projects.create({
    //   name: 'project2',
    //   balance: 100
    // }, function(err, project) {
    //   if (err) return debug(err);
    //   debug(project);
    //   //add team members
    //   Team.create({
    //     ownerId: project.ownerId,
    //     memberId: users[1].id
    //   }, function(err, team) {
    //     if (err) return debug(err);
    //     debug(team);
    //   });
    // });

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
