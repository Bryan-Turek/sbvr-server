var server = require('../server');
var dataSource = server.dataSources.sbvrdev;
// var User = server.models.account;
// var user = [
//       {
//         name: 'Bryan Turek',
//         email: 'turek.bryan@gmail.com',
//         password: 'testing',
//         created: new Date(),
//         modified: new Date()
//       },
//       {
//         name: 'Ian Stavros',
//         email: 'ianstavros@gmail.com',
//         password: 'testing',
//         created: new Date(),
//         modified: new Date()
//       },
//       {
//         name: 'Nick Stavros',
//         email: 'nick@drstavros.com',
//         password: 'testing',
//         created: new Date(),
//         modified: new Date()
//       }
//     ];

dataSource.automigrate(null,function(er) {
  if (er) throw er;
  // User.create(user, function(er, result) {
  //   if (er) return;
  //   console.log('Record created:', result);
  //
  //   console.log('done');
  //   dataSource.disconnect();
  // });
  console.log('finished migration');
  dataSource.disconnect();

  process.nextTick(function() {
    process.exit();
  });
});
