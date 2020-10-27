const connect = require('./connection');

const registerPost = async (title, content) =>
  connect().then((db) =>
    db.collection('posts').insertOne({ title, content })
  ).then(result => result.ops[0].title );

const getAllPosts = async () =>
  connect().then((db) =>
    db.collection('posts').find().toArray()
  ).then((result) => result)

module.exports = { registerPost, getAllPosts };