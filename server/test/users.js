var server = require('../server');
var dataSource = server.dataSources.sbvrdev;
var User = server.models.account;
var user = [
      {
        name: 'Bryan Turek',
        email: 'turek.bryan@gmail.com',
        created: new Date(),
        modified: new Date()
      }
    ];

var sources = [
  'User',
  'Role',
  'ACL',
  'RoleMapping',
  'AccessToken',
  'account']

dataSource.automigrate( sources, function(er) {
  if (er) throw er;
  // User.create(user, function(er, result) {
  //   if (er) return;
  //   console.log('Record created:', result);
  //
  //   console.log('done');
  //   dataSource.disconnect();
  // });
});
