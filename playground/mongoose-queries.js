const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const separator = ()=>console.log('\n =====================================================');
 

Todo.find({}).then((todo) =>{
   
    if(!todo){
        return console.log('Todo not found', todo);
    }

   console.log('Todo => ',todo);

}, (e)=>{
    console.log(e);
});
// var id = '5a1d4c799845622c4ca73595xxx';
// if(!ObjectID.isValid(id)){
//     return console.log('ID not valid!, stopping the program');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
//     separator();
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
//     separator();
// })


