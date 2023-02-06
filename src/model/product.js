const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema({
  category: String,
  name: String,
  color: String,
  price: String
});

const ProductsModel = model("Product", ProductsSchema);

module.exports = ProductsModel;
