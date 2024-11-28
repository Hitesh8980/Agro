const express = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct); 
router.put("/:id", updateProduct); // Add authMiddleware here for admin
router.delete("/:id", deleteProduct); // Add authMiddleware here for admin

module.exports = router;
