const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/Products");

const router = express.Router({ mergeParams: true });

router.route("/").get(getProducts).post(authMiddleware, addProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
