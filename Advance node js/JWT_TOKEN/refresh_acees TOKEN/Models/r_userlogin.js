// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const verifytoken = require("../Middleware/auth.js");
// const stude = require("../Controller/userlogin.js");

// // LOGIN
// router.post("/", stude.userlogin);

// // PROFILE (ACCESS TOKEN REQUIRED)
// router.get("/profile", verifytoken, (req, res) => {
//     res.status(200).json({
//         status: 200,
//         message: "profile data",
//         user: req.user,
//     });
// });

// // REFRESH ACCESS TOKEN (BODY → JSON)
// router.post("/refresh", (req, res) => {
//     const { refreshToken } = req.body;

//     if (!refreshToken) {
//         return res.status(401).json({
//             status: 401,
//             message: "Refresh token required",
//         });
//     }

//     try {
//         // verify refresh token
//         const decoded = jwt.verify(
//             refreshToken,
//             process.env.JWT_REFRESH_SECRET
//         );

//         // generate NEW access token (1 minute)
//         const newAccessToken = jwt.sign(
//             {
//                 id: decoded.id,
//                 email: decoded.email,
//             },
//             process.env.JWT_SECRET,
//             { expiresIn: "1m" }
//         );

//         return res.status(200).json({
//             status: 200,
//             accessToken: newAccessToken,
//         });

//     } catch (err) {
//         return res.status(403).json({
//             status: 403,
//             message: "Invalid or expired refresh token",
//         });
//     }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifytoken = require("../Middleware/auth.js");
const stude = require("../Controller/userlogin.js");

// LOGIN
router.post("/", stude.userlogin);

// PROTECTED PROFILE
router.get("/profile", verifytoken, (req, res) => {
    res.status(200).json({
        status: 200,
        message: "profile data",
        user: req.user,
    });
});

// REFRESH ACCESS TOKEN
router.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            status: 401,
            message: "Refresh token required",
        });
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET || "fallback_refresh_secret"
        );

        // NEW ACCESS TOKEN (1 minute)
        const newAccessToken = jwt.sign(
            {
                id: decoded.id,
                email: decoded.email
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
            message: "Invalid or expired refresh token",
        });
    }
});

module.exports = router;
