const express = require("express");
const { registerUser, loginUser } = require("../controllers/Usercontroller");

const router = express.Router();

router.post("/register", registerUser); 
router.post("/login", loginUser); // User login

module.exports = router;
