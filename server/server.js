var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
            return res.status(404).send();
         }
         console.log('passed validation');
    Todo.findById(id).then((todo)=>{
        if(todo){
            console.log(todo);
            res.send({todo});
        }
        else{
            res.status(404).send({});
        }
    }, (err)=>{
        res.status(400).send({});
    });
});


//Server 
const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, ()=>{
    console.log(`Listening on port ${PORT_NUMBER}`);
});

module.exports = {app};



