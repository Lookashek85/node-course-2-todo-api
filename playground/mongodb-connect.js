//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical to code above



/*destructuring objects in ES6
var user = {name: 'Lukas', age: 31};
var {name} = user;
console.log(name); */


//MongDB connection details
const dbName = 'ToDoApp';
const portNumber = '27017';
const connectionStr =`mongodb://localhost:${portNumber}/${dbName}`; 

MongoClient.connect(connectionStr,(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');//using return to prevent further execution of program in case of error
    }
    console.log(`Connected to ${connectionStr} from localhost`);


    db.collection('Todos').insertOne({
        text : "Cook dinner"
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});