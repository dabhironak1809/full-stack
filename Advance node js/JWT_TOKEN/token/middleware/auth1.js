// login authontication // this are extra to emp table access to using a tokon that without tokon not access as crud not perform to this crud use to tokon rquire to that tokon place on postmen authorize to bearer token name to place tokon and to use emp 

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifytoken1 = (req, res, next) => {

    // const authHeader = req.headers["authHeader"];
    const authHeader = req.headers.authorization;

    // const token = authHeader && authHeader.split("")[1];

    if (!authHeader) {
        return res.status(401).json({
            status: 401,
            message: "access denied . no tokon provider"
        });
    }

    // /expected formate bearer token 
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "access denie. invalid tokon formate",
        });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({
            status: 403,
            message: "invalid token or expired token",
        })
    }

}
module.exports = verifytoken1


// AI generated code 👇

// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const verifytoken1 = (req, res, next) => {

//     // Get Authorization header
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//         return res.status(401).json({
//             status: 401,
//             message: "Access denied. No token provided",
//         });
//     }

//     // Expected format: Bearer TOKEN
//     const token = authHeader.split(" ")[1];

//     if (!token) {
//         return res.status(401).json({
//             status: 401,
//             message: "Access denied. Invalid token format",
//         });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403).json({
//             status: 403,
//             message: "Invalid or expired token",
//         });
//     }
// };

// module.exports = verifytoken1;
