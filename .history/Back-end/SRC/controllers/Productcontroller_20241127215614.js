const Product = require("../models/Productmodel");

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const createProduct = async (req, res) => {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    res.status(201).json(product);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, pricePerUnit } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price }, { new: true });
    res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).json({ message: "Product deleted" });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
