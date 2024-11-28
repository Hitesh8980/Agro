const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        pricePerUnit: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
