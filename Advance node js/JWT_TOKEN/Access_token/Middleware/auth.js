const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifytoken = (req, res, next) => {
    const authheder = req.headers.authorization;

    if (!authheder) {
        return res.status(401).json({
            status: 401,
            message: "access denied . no token provide"
        });
    }

    const token = authheder.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "invalid email or token expired",
        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (err) {
        return res.status(403).json({
            status: 403,
            message: "invalid token or expiried token",
        })
    }

}
module.exports = verifytoken