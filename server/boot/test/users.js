var server = require('./server');
var dataSource = server.dataSources.db;
var User = server.models.user;
var users = [
      {
        name: 'Bryan Turek'
        email: 'turek.bryan@gmail.com',
        created: new Date(),
        modified: new Date()
      }
    ];

var count = users.length;
dataSource.automigrate('user', function(er) {
  if (er) throw er;
  users.forEach(function(user) {
    User.create(user, function(er, result) {
      if (er) return;
      console.log('Record created:', result);
      count--;
      if(count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});
