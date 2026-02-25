// const rateLimit = require("express-rate-limit");

// // Normal API limiter
// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 10, // 100 requests per IP
//     message: {
//         success: false,
//         message: "Too many requests, please try again later"
//     },
//     standardHeaders: true,
//     legacyHeaders: false,
// });

// // Strong limiter for auth routes
// const registerLimiter = rateLimit({
//     windowMs: 10 * 60 * 1000, // 10 minutes
//     max: 5, // 5 attempts
//     message: {
//         success: false,
//         message: "Too many attempts. Try again later."
//     }
// });

// module.exports = {
//     apiLimiter,
//     registerLimiter
// };


const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, //100
    message: {
        success: false,
        message: "to many request , try again later"
    }
});

const registerLimiter = rateLimit({
    window: 10 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "to many registration . please wait."
    }
})

module.exports = {
    apiLimiter,
    registerLimiter
}