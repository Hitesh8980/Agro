const express = require("express");
const { 
    placeOrder, 
    getAllOrders, 
    updateOrderStatus, 
    getOrderById 
} = require("../controllers/orderController");

const router = express.Router();

// Buyer Routes
router.post("/", placeOrder); // Place an order
router.get("/:id", getOrderById); // Get order by ID for tracking

// Admin Routes
router.get("/", getAllOrders); // Get all orders (Admin only)
router.put("/:id", updateOrderStatus); // Update order status (Admin only)

module.exports = router;
