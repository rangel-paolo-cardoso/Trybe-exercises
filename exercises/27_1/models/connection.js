const mongoClient = require('mongodb').MongoClient;

const connection = () => {
  return mongoClient
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((session) => session.db(process.env.DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;


// const mysqlx = require('@mysql/xdevapi');

// const connection = () => {
//   return mysqlx.getSession({
//     user: 'root',
//     password: '/NewRpower23',
//     host: 'localhost',
//     port: 33060,
//     schema: 'mvc_example',
//   })
//   .then((session) => {
//     return session.getSchema('mvc_example');
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
// };

// module.exports = connection;
