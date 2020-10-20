const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const connect = async () => {
  try {
    const session = await mongoClient
      .connect(MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    const database = await session.db('rest_exercicios');
    return database;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = connect;
