const db = require("../db.js");

// npm install jsonwebtoken dotenv
// // or // 
// npm install jsonwebtoken 

const jwt = require("jsonwebtoken"); // tokon
require("dotenv").config(); // tokon


const userlogin = (req, res) => {
    const { email, password } = req.body;

    // required a email and password 

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: "Email and password are required",
        });
    }

    const query = `SELECT id, name, email FROM tokon WHERE email = ? AND password = ?`;

    db.query(query, [email, password], (err, data) => {

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

        // this place a create a tokon .. // tokon create 

        const user = data[0];
        const tokon = jwt.sign(
            {
                // to any detail display for a your data base as ex : name email,mobile etc..
                id: user.id,
                name: user.name,
                email: user.email,

            },
            process.env.JWT_SECRET || 'fallback_secret',
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '24h'
            }
        );

        // user: data[0],
        return res.status(200).json({
            status: 200,
            message: "Login successful",
            user: user,
            tokon: tokon,
        });
    });
};

module.exports = { userlogin };
