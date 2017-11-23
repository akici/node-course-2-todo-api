// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

    if (err) {
        return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Ayberk Akici'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a16f23a14d58a43fb9a0aa2")}).then((results)=>{

        console.log(JSON.stringify(results, undefined, 2));
    });

    // db.close();

});