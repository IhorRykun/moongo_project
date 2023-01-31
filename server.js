const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.Promise = global.Promise;

dotenv.config({ path: "./.env" });

const errorHandler = require("./src/middleware/error");
const products = require("./src/routers/products");
const MongoClient = require("./src/database/MongoClient");

MongoClient.init();
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use("/api/products", products);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
