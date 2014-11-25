var server = require('../server');
var dataSource = server.dataSources.sbvrdev;

dataSource.automigrate(null,function(er) {
  if (er) throw er;

  console.log('finished migration');
  dataSource.disconnect();

  process.nextTick(function() {
    process.exit();
  });
});
