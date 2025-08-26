const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });

app.use('/api/products', productRoutes);

module.exports = app;
