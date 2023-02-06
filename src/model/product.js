const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema({
  category: {
    type: String,
    require: true,
    maxlength: 30
  },
  name: {
    tupe: String,
    require: true,
    maxlength: 20
  },
  color: {
    tupe: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
    min: 0.01
  }
});

const ProductsModel = model("Product", ProductsSchema);

module.exports = ProductsModel;
