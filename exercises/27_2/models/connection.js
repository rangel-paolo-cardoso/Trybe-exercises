const mysqlx = require('@mysql/xdevapi');
require('dotenv');

const config = {
  user: process.env.USER,
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
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

module.exports = connect;
