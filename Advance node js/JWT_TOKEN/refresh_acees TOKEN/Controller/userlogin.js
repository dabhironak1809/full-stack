const db = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userlogin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: "Email and password are required",
        });
    }

    const sql = "SELECT id, name, email FROM tokon WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: "Database error",
                error: err.message,
            });
        }

        if (data.length === 0) {
            return res.status(401).json({
                status: 401,
                message: "Invalid email or password",
            });
        }

        const user = data[0];

        // ACCESS TOKEN (1 minute)
        const accessToken = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: "1m" }
        );

        // REFRESH TOKEN (1 day)
        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            status: 200,
            message: "Login success",
            accessToken,
            refreshToken
        });
    });
};

module.exports = { userlogin };
