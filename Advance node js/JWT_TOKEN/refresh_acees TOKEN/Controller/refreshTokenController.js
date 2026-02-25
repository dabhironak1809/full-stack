//  const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const refreshAccessToken = (req, res) => {
//     const { refreshToken } = req.body;

//     if (!refreshToken) {
//         return res.status(401).json({
//             status: 401,
//             message: "Refresh token required",
//         });
//     }

//     jwt.verify(
//         refreshToken,
//         process.env.JWT_REFRESH_SECRET,
//         (err, decoded) => {
//             if (err) {
//                 return res.status(403).json({
//                     status: 403,
//                     message: "Invalid or expired refresh token",
//                 });
//             }

//             // Create NEW access token (1 minute)
//             const newAccessToken = jwt.sign(
//                 {
//                     id: decoded.id,
//                     email: decoded.email
//                 },
//                 process.env.JWT_SECRET,
//                 { expiresIn: "1m" }
//             );

//             return res.status(200).json({
//                 status: 200,
//                 accessToken: newAccessToken
//             });
//         }
//     );
// };

// module.exports = { refreshAccessToken };
