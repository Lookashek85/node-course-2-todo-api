const {MongoClient, ObjectID} = require('mongodb'); // identical to code above


//MongDB connection
const dbName = 'ToDoApp';
const portNumber = '27017';
const connectionStr =`mongodb://localhost:${portNumber}/${dbName}`; 

MongoClient.connect(connectionStr,(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');//using return to prevent further execution of program in case of error
    }
    console.log(`Connected to ${connectionStr}`);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a05a2f0965bb12b507d7895')})
    //     .toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    var findParamCount = {completed:false};
    var findParamName = {name: 'Lukas'};

    db.collection('Todos').find(findParamCount).count().then((count) => {
        console.log('Todos count query :');
        console.log(`Todos count : ${count}`);
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find(findParamName).toArray().then((docs) => {
        console.log('Todos find by name query:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

     //db.close();
});