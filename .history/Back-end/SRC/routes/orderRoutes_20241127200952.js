const express = require("express");
const { 
    placeOrder, 
    getAllOrders, 
    updateOrderStatus, 
    getOrderById 
} = require("../controllers/OrderController");

const router = express.Router();

// Buyer Routes
router.post("/", placeOrder); 
router.get("/:id", getOrderById); /

// Admin Routes
router.get("/", getAllOrders); 
router.put("/:id", updateOrderStatus); 

module.exports = router;
