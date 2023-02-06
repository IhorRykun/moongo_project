const MongoClient = require("../../database/MongoClient");
const { ObjectId } = require("mongodb");

const getCollection = () => MongoClient.getDb().collection("users");

async function verifyPassword(email, password) {
  return getCollection().findOne({ email, password });
}
async function getUser(userId) {
  return getCollection().findOne({ _id: new ObjectId(userId) });
}

async function createUser(user) {
  const { ...userData } = user;
  return getCollection().insertOne({ ...userData });
}

function updateUser(userId, user) {
  return getCollection().updateOne(
    { _id: new ObjectId(userId) },
    { $set: { ...user } }
  );
}

function deleteUser(userId) {
  return getCollection().deleteOne({ _id: new ObjectId(userId) });
}

async function getUserByFilter(filter = {}) {
  return getCollection().findOne(filter);
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  verifyPassword,
  getUserByFilter
};
