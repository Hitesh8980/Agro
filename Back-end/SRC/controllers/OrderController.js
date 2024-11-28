const Order = require("../models/Ordermodel");
const Product = require("../models/Productmodel");

// Place a New Order
const placeOrder = async (req, res) => {
    const { buyerName, contactInfo, deliveryAddress, items } = req.body;

    try {
        const order = new Order({
            buyerName,
            contactInfo,
            deliveryAddress,
            items,
        });

        await order.save();
        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: "Failed to place order", error: error.message });
    }
};

// Get All Orders (Admin Only)
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("items.productId", "name pricePerUnit");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders", error: error.message });
    }
};

// Get Order by ID (For Tracking)
const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate("items.productId", "name pricePerUnit");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch order", error: error.message });
    }
};

// Update Order Status (Admin Only)
const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["Pending", "In Progress", "Delivered"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
    }

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).populate("items.productId", "name pricePerUnit");

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json({ message: "Order status updated", order: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: "Failed to update order status", error: error.message });
    }
};

module.exports = { placeOrder, getAllOrders, getOrderById, updateOrderStatus };
