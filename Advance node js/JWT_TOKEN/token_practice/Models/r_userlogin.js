const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

router.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            status: 401,
            message: "refresh token expired",
        });
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET || "fallback_refresh_secret"
        );

        const newAccessToken = jwt.sign(
            {
                id: decoded.id,
                name: decoded.name
            },
            process.env.JWT_SECRET || "fallback_secret",
            { expiresIn: "1m" }
        );

        return res.status(200).json({
            status: 200,
            accessToken: newAccessToken,
        });


    } catch (err) {
        return res.status(403).json({
            status: 403,
            message: "invalid or expired refresh token",
        });
    }
});

module.exports = router;