const express = require("express");
const { registerUser, loginUser } = require("../");

const router = express.Router();

router.post("/register", registerUser); // User registration
router.post("/login", loginUser); // User login

module.exports = router;
