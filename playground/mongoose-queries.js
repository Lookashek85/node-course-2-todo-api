const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const separator = ()=>console.log('\n =====================================================');

//var userId = User.findOne({email:'lookash85@hotmail.co.uk'}).then((user)=>{return user;},(err)=>{console.log(err)});
var emailObj = {email:'lookash85@hotmail.co.uk'};


var id = '5a1c32c7eec3b90ba830890f';

User.findOne({_id: id}).then((user) =>{
    if(!user){
        return console.log('User not found!');
    }
    console.log('User ',user);
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

