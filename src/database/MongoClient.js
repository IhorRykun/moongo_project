const { MongoClient } = require("mongodb");

class MongoDBClient {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI);
  }

  async init() {
    if (this.db) {
      console.log("Mongo connection already open");
      return;
    }
    await this.client.connect();
    console.log("Opened mongo connection");

    // README: Create a unique index on the token key in the pushTokens collection
    this.db = this.client.db("Product_shop");
  }

  async close() {
    await this.client.close();
    this.db = undefined;
    logMongo("Closed mongo connection");
  }

  getDb() {
    if (!this.db) {
      throw new Error("Mongo client is not connected");
    }
    return this.db;
  }
}

module.exports = new MongoDBClient();
