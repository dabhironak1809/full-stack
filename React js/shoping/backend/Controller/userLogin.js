const db = require("../db.js");
// const { validationResult } = require("express-validator");



const userLogin = async (req, res) => {
    //   const result = validationResult(req);
    //   if (!result.isEmpty()) {
    //     return res.status(400).json({
    //       status: 400,
    //       errors: result.array(),
    //     });
    //   }

    // const { email, mobile, pass } = req.query;
    const { email, mobile, pass } =  req.body;


    try {
        const q = `
      SELECT user_id, user_name, email, mobile_number 
      FROM user 
      WHERE 
        (email = ? OR mobile_number = ?) 
        AND password = ?
        `;

        db.query(q, [email || mobile, email || mobile, pass], (err, data) => {
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
                    user: data[0],
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

