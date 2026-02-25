const { body, validationResult } = require("express-validator");

// this email are alredy save a database to new email required to update 
const { emailExists } = require("../Contoller/register");

module.exports = [

    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("name cannot be empty"),

    //  body("email")īīīīī
    // .optional()              // 🔑 key line
    // .trim()
    // .isEmail()
    // .withMessage("email is invalid"),

    // this check a user email exist and user requirement old email as it is on change as per user requirement 
    body("email")
        .optional()
        .isEmail()
        .withMessage("email is invalid")
        .bail()
        .custom(async (value, { req }) => {
            const userId = Number(req.params.id); // ✅ FIX

            if (await emailExists(value, userId)) {
                throw new Error("Email already exists");
            }
        }),


    body("password")
        .optional()
        .isLength({ min: 8 })
        .withMessage("password must be at least 8 characters"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "validation failed",
                errors: errors.array().map(err => ({
                    field: err.path,
                    message: err.msg
                })),
            });
        }
        next();
    }
];
