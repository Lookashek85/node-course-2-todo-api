var mongoose = require('mongoose');


//MongDB connection details
const remoteMongoDB = 'mongodb://<dbuser>:<dbpassword>@ds123796.mlab.com:23796/udemycourses';
const dbName = 'ToDoApp';
const portNumber = '27017';
const connectionString =`mongodb://localhost:${portNumber}/${dbName}`;


mongoose.Promise = global.Promise;
mongoose.connect(remoteMongoDB || connectionString, { useMongoClient: true });

module.exports = {mongoose};