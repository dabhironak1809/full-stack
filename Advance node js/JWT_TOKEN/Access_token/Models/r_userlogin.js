const express = require("express");
const router = express.Router();

const verifytoken = require("../Middleware/auth.js");

const stude = require("../Controller/userlogin.js");

router.post("/", stude.userlogin);

router.get("/profile", verifytoken, (req, res) => {
    res.status(200).json({
        status: 200,
        message: "profile data",
        user: req.user,
    });
});

module.exports = router