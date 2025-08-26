// controllers/productController.js
const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.json(product);
};

// Tương tự: getAll, getById, update, delete
