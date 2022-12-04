const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Number,
    min: 1,
    required: true,
  },
  isInOtherCarts: {
    type: Boolean,
  },
  highLights: {
    type: [String],
  },
  dimensions: {
    type: [String],
    required: true,
  },
  labels: {
    type: [String],
  },
});

const Product = new mongoose.model("product", ProductSchema);

module.exports = Product;
