const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./db");

const productRoutes = require('./SRC/routes/productRoutes');
const orderRoutes = require("./SRC/routes/orderRoutes");
const userRoutes = require("./SRC/routes/userRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);

// Error Handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


module.exports = app;
