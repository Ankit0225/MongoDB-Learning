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

async function writetasks(){
    const client = await MongoClient.connect(MONGO_URL)
    const todolistdb = client.db(db_name)

  const todos = todolistdb.collection('todos')
  
  const result = await todos.insertMany([
//    {task: 'simple task', priority: 4, owner: 'security'},
//    {task: 'Ordinary task', priority: 2, owner: 'CEO'},
//    {task: 'Complicated task', priority: 1, owner: 'Manager'},
//    {task: 'Administration task', priority: 3, owner: 'Product Engineer'},
//    {task: 'Security task', priority: 8, owner: 'security'},

// Tasks without priority


//    {task: 'more task',  owner: 'security'},
//    {task: 'Ordinary task', owner: 'CEO'},
//    {task: 'Complicated task', owner: 'Manager'},
//    {task: 'Administration task', owner: 'Product Engineer'},
//    {task: 'Security task', owner: 'security'},
 
// Tasks without Owner

//    {task: 'simple task', priority: 4},
//    {task: 'Ordinary task', priority: 2},
//    {task: 'Complicated task', priority: 1},
//    {task: 'Administration task', priority: 3},
//    {task: 'Security task', priority: 8},


// Adding more stuff soon

])
  console.log(result);
}
writetasks()
