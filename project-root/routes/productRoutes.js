// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
// router.get('/', ...);
// router.get('/:id', ...);
// router.put('/:id', ...);
// router.delete('/:id', ...);

module.exports = router;
