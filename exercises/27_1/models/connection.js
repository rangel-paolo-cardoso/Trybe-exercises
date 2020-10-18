const mongoClient = require('mongodb').MongoClient;

const connection = () =>
  mongoClient.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('cep_exercise'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
