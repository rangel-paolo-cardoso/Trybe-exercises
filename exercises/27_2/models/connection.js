const mysqlx = require('@mysql/xdevapi');
const path = require('path');
// const enviromentVariable = path.resolve(__dirname, '..', '.env');
// require('dotenv').config({ path: enviromentVariable });
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connect = async () => {
  if (schema) return Promise.resolve(schema);
  try {
    const session = await mysqlx.getSession(config);
    schema = await session.getSchema('rest_exercicios');
    return schema;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = connect;
