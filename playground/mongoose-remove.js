const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a184fecfa46fff2e1128889'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a184fecfa46fff2e1128889').then((todo) => {
    console.log(todo);
});