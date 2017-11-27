var mongoose = require('mongoose');


//MongDB connection details
const dbName = 'ToDoApp';
const portNumber = '27017';
const connectionString =`mongodb://localhost:${portNumber}/${dbName}`;

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useMongoClient: true });

module.exports = {mongoose};