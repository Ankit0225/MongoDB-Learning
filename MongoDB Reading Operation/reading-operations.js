const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const db_name = 'todolistdb';
// ASYNC IIFE

async function writetask(){
    const client = await MongoClient.connect(MONGO_URL)
    const todolistdb = client.db(db_name)

  const todos = todolistdb.collection('todos')
  const todo = {
      task: 'an first task',
      priority: 2,
      owner: 'manager'
  }
  const result = await todos.insertOne(todo)
  console.log(result);
}

async function readtasks(){
    const client = await MongoClient.connect(MONGO_URL)
    const todolistdb = client.db(db_name)

  const todos = todolistdb.collection('todos')
  

  const todoarr = await todos.find().toArray()
  
  todoarr.forEach((todo) => console.log(JSON.stringify(todo)))
}
readtasks()
