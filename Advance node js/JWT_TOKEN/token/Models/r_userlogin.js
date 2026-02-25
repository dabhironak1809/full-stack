const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth.js") // tokon

const login = require("../Controller/userlogin.js");

// public route 
// router.post("/", login.userlogin);
router.post("/", login.userlogin)

// ===  tokon 
router.get("/profile", verifyToken, (req, res) => {
    res.status(200).json({
        status: 200,
        message: "profile data",
        user: req.user,
    });
});

module.exports = router