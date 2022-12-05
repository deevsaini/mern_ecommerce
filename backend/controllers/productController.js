const Product = require("../models/productModel");

//create Product

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

//Update Product -- Admin

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindandModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};
