const db = require("../db.js");

const test_admin = async (req, res) => {

    const { email, mobile, pass } = req.query;

    try {
        const q = `select admin_id,name,mobile_number,email from admin_login where (email=? OR mobile_number=?) AND password=?`;

        db.query(q, [email || mobile, email || mobile, pass], (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: "database error",
                    error_type: "error",
                    data: err.message,
                });

            }
            if (data.length > 0) {
                return res.status(200).json({
                    status: 200,
                    message: "login success",
                    error_type: "success",
                    user: data[0],
                });
            } else {
                return res.status(401).json({
                    status:401,
                    message:"invalid email/mobile or password",
                    error_type:"error"
                });
            }
        });
        
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:"server error",
            error_type:"error",
            data:error.message,
        });
    }

};

module.exports = {test_admin}