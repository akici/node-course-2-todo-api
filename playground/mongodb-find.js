// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

    if (err) {
        return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a16eeeb14d58a43fb9a099a')
    // }).toArray().then((docs)=>{
    //
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //
    // }, (err)=>{
    //
    //     console.log('Unable to fetch todos', err);
    //
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //
    //     console.log('Unable to fetch todos', err);
    //
    // });

    db.collection('Users').find({
        name: 'Ayberk Akici'
    }).toArray().then((docs)=>{

        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{

        console.log('Unable to fetch todos', err);

    });

    // db.close();

});