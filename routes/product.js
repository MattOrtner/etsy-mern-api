const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getOneProduct,
  postCreateProduct,
  deleteProduct,
} = require("../controllers/product");

// Get all products
router.get("/products", getAllProducts);

// Get one product
router.get("/products/:id", getOneProduct);

// Add a new product
router.post("/products", postCreateProduct);

// Delete a product
router.delete("/products/:id", deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);

module.exports = router;
