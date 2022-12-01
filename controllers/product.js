const Product = require("../models/product");

exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Products not found", error: err.message })
    );
};

exports.getOneProduct = (req, res) => {
  Product.findById(req.params)
    .then((product) => res.json(product))
    .catch((err) =>
      res.status(404).json({ message: "Product not found", error: err.message })
    );
};

exports.postCreateProduct = (req, res) => {
  Product.create(req.body)
    .then((data) => res.json({ message: "Product added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add product", error: err.message })
    );
};

exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "Update successful.", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update product", error: err.message })
    );
};

exports.deleteProduct = (req, res) => {
  Product.findOneAndDelete(req.params)
    .then((data) => res.json({ message: "Product deleted successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to remove product", error: err.message })
    );
};
