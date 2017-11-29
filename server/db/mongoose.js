var mongoose = require('mongoose');
var properties = require('./../../config/propertiesLoader');

// //MongDB remote connection details
// const remoteLogin = 'Lukas'
// const remotePwd = 'Lookashek85!';
// const remoteDBHost = '@ds123796.mlab.com:23796';
// const remoteDBName = 'udemycourses'
// const remoteMongoDBconnectStr = `mongodb://${remoteLogin}:${remotePwd}${remoteDBHost}/${remoteDBName}`;
// //Local connection details
// const dbName = 'ToDoApp';
// const portNumber = '27017';
// const connectionString =`mongodb://localhost:${portNumber}/${dbName}`;

var remoteConnString = properties.remoteConnectionString;
var localConnString = properties.localConnectionString;

mongoose.Promise = global.Promise;
mongoose.connect(remoteConnString || localConnString, { useMongoClient: true });

module.exports = {mongoose};