const ErrorResponse = require("../utils/errorResponse");
const asyncWrap = require("express-async-wrap");
const {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../repositories/MONGO/Products");
exports.getProducts = asyncWrap(async (req, res, next) => {
  const products = await getProducts(req.params.offset, req.params.limit);

  res.status(200).json({
    success: true,
    data: products
  });
});

exports.getProduct = asyncWrap(async (req, res, next) => {
  const Product = await getProduct(req.params.id);
  if (!Product) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: Product
  });
});

exports.addProduct = asyncWrap(async (req, res, next) => {
  const Product = await createProduct(req.body);

  res.status(200).json({
    success: true,
    data: Product
  });
});

exports.updateProduct = asyncWrap(async (req, res, next) => {
  let Product = await getProduct(req.params.id);

  if (!Product) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  Product = await updateProduct(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: Product
  });
});

exports.deleteProduct = asyncWrap(async (req, res, next) => {
  const Product = await getProduct(req.params.id);

  if (!Product) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  await deleteProduct(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  });
});
