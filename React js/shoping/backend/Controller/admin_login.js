const db = require("../db.js");

const userLogin = async (req, res) => {
    const { email, pass } = req.query; // Only one field needed for email or mobile

    try {
        // SQL query: check email OR mobile number + password
        const q = `
      SELECT user_id, user_name, email, mobile_number 
      FROM user 
      WHERE (email = ? OR mobile_number = ?) AND password = ?
    `;

        db.query(q, [email, email, pass], (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: "Database error",
                    error_type: "error",
                    data: err.message,
                });
            }

            if (data.length > 0) {
                return res.status(200).json({
                    status: 200,
                    message: "Login successful",
                    error_type: "success",
                    user: data[0], // Send user details
                });
            } else {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid email/mobile or password",
                    error_type: "error",
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error",
            error_type: "error",
            data: error.message,
        });
    }
};

module.exports = { userLogin };
