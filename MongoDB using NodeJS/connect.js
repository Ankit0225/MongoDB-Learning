const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const db_name = 'todolistdb';
// ASYNC IIFE

(async () => {

  const client = await MongoClient.connect(MONGO_URL)

  const todolistdb = client.db(db_name)

  console.log(todolistdb)
  
})()