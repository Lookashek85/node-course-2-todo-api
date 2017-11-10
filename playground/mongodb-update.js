const {MongoClient, ObjectID} = require('mongodb'); // identical to code above


//MongDB connection details
const dbName = 'ToDoApp';
const portNumber = '27017';
const connectionStr =`mongodb://localhost:${portNumber}/${dbName}`; 

MongoClient.connect(connectionStr,(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');//using return to prevent further execution of program in case of error
    }
    console.log(`Connected to ${connectionStr}`);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a05b329af743c59019c90f9')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a05b5a6fb6f9c2f48f97025')
    }, {
        $set: {
            name: 'Lukas'
        },
        $inc :{
            age: 2
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    })


    //db.close();
});