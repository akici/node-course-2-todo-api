const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

    let todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});

// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// let otherTodo = new Todo({
//     text: ' Edit this video'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo');
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//     console.log('Unable to save todo', e);
// });

// User
// Email


// let newUser = new User({
//     email: 'ayberkakici@gmail.com  '
// });
//
// newUser.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//     console.log('Unable to save todo', e);
// });


// save new something