var server = require('../server');
var dataSource = server.dataSources.db;
var User = server.models.user;
var user = [
      {
        name: 'Bryan Turek',
        email: 'turek.bryan@gmail.com',
        created: new Date(),
        modified: new Date()
      }
    ];

dataSource.automigrate('user', function(er) {
  if (er) throw er;
  User.create(user, function(er, result) {
    if (er) return;
    console.log('Record created:', result);

    console.log('done');
    dataSource.disconnect();
  });
});
