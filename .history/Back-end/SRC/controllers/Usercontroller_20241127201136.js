const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register User
const registerUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ username, password, role });
        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({
            message: "Login successful",
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
};

module.exports = { registerUser, loginUser };
