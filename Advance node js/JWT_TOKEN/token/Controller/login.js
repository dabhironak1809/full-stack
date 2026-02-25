const db = require("../db.js");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: "email and password are required"
        });
    }

    const query = `select id,name,email from tokon where email = ? AND password = ?`;

    db.query(query, [email, password], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: "database error",
                errro: err.message,
            });
        }

        if (data.length === 0) {
            return res.status(401).json({
                status: 401,
                message: "invalid email or mobile",
            });
        }

        // create a tokon 

        const user = data[0];
        const tokon = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET || 'fallback_secret',
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '24h'
            }
        );

        return res.status(200).json({
            status: 200,
            message: "login success",
            user: user,
            tokon: tokon
        });
    });
};

module.exports = { login };