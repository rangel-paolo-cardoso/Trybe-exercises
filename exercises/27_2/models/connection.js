const mongoClient = require('mongodb').MongoClient;
const path = require('path');
const enviromentVariable = path.resolve(__dirname, '..', '.env');
require('dotenv').config({ path: enviromentVariable });
// require('dotenv').config();

const connect = async () => {
  try {
    const session = await mongoClient
      .connect(process.env.MONGO_DB_URL, {
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
