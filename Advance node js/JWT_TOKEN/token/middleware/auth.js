// // userlogin  authentication  
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const verifyToken = (req, res, next) => {

//     const authHeader = req.headers["authHeader"]; // this old new are down side and auth1.js allocate 
//     const token = authHeader && authHeader.split("")[1]; // this old new are down side and auth1.js allocate 

//     if(!token){
//         return res.status(401).json({
//             status:401,
//             message:"access denied no token proveder"
//         });
//     }

//     try{
//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     }catch(err){
//         return res.status(403).json({
//             status:403,
//             message:"invalid token",
//         })
//     }
// };

// module.exports = verifyToken;

// up side some part are old to that are new 

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
