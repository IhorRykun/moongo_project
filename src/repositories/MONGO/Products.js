const MongoClient = require("../../database/MongoClient");
const { ObjectId } = require("mongodb");

const getCollection = () => MongoClient.getDb().collection("product");

function getProducts() {
  return getCollection().find({}).toArray();
}

async function getProduct(productId) {
  return getCollection().findOne({ _id: new ObjectId(productId) });
}

async function createProduct(product) {
  const { id, ...ProductData } = product;
  return getCollection().insertOne({ _id:  new ObjectId(id), ...ProductData });
}

function updateProduct(productId, porduct) {
  return getCollection().updateOne(
    { _id: new ObjectId(productId) },
    { $set: { ...porduct } }
  );
}

function deleteProduct(productId) {
  return getCollection().deleteOne({ _id: new ObjectId(productId) });
}

async function getProductByFilter(filters = {}, limit, offset) {
  return getCollection().find(filters).limit(limit).skip(offset).toArray();
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByFilter
};
