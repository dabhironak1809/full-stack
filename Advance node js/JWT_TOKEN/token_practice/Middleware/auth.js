const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifytoken = (req, res, next) => {

    const authheader = req.headers.authorization;

    if (!authheader) {
        return res.status(401).json({
            status: 401,
            message: "access denied . no token provided",
        });
    }

    const token = authheader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "invalid athorization fomrate",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({
            status: 403,
            message: "invalid or expired access token",
        });
    }
}

module.exports = verifytoken;