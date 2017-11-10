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

    db.collection('Users').deleteMany({name:'Lukas'}).then((result) =>{
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a05b592694a482ca44ef170')}).then((result) =>{
        console.log(result);
    })

    // delete Many  5a05b592694a482ca44ef170
    // var deleteWhereParam = {text:'Eat lunch'}
    // db.collection('Todos').deleteMany(deleteWhereParam).then((result) =>{
    //     console.log(result);
    // });

    // deleteOne
    // var deleteOneWhereParam = {text:'Eat lunch'}
    // db.collection('Todos').deleteOne(deleteOneWhereParam).then((result) =>{
    //    console.log(result);
    // });

    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result);
    // });
     //db.close();
});