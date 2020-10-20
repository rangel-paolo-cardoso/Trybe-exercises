const connect = require('./connection');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const db = await connect();
    const result = await db.collection('products').insertOne({ name, brand });
    return { id: result.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};


const getAll = async () => {
  try {
    const db = await connect();
    const searchDb = await db.collection('products').find().toArray();
    return searchDb || [];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (productId) => {
  try {
    const db = await connect();
    return db.collection('products').findOne(ObjectId(productId));
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
try {
    const db = await connect();
    const { result } = await db
      .collection('products')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } });
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
    try {
    const db = await connect();
    const product = await getById(id);
    if(!product) return {};
    await db.collection('products').deleteOne({ _id: ObjectId(id)});
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
