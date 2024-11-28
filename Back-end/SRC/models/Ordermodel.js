const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        buyerName: { type: String, required: true },
        contactInfo: { type: String, required: true },
        deliveryAddress: { type: String, required: true },
        items: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                quantity: { type: Number, required: true },
            },
        ],
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Delivered"],
            default: "Pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
