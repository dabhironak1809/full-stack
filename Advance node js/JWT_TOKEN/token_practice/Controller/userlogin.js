const db = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userlogin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({
            status: 401,
            message: "email and password are required"
        })
    }

    const sql = "select id,name,email from tokon where email = ? AND password = ?";

    db.query(sql, [email, password], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: "database error",
                error: err.message,
            });
        }

        if (data.length === 0) {
            return res.status(401).json({
                status: 401,
                message: "invalid email and password",
            });
        }


        const user = data[0];

        const accessToken = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET || "fallback_secret",
            {
                expiresIn: "1m"
            }
        );

        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_REFRESH_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            status: 200,
            message: "login success",
            accessToken,
            refreshToken
        });
    });
};

module.exports = { userlogin }