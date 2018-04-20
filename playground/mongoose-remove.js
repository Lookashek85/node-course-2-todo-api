const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

Todo.findByIdAndRemove('5ad862925e7653253469ca26').then((todo)=>{
    console.log("trying to delete..");
    console.log(todo);  
});

