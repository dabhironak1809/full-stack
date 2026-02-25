const express = require("express");
const router = express.Router();

const { body } = require('express-validator')

const register = require("../Contoller/register.js");
// const registerValidation = require("../Middleware/registerValidator.js");

router.get("/", register.getregisters);

router.post("/",
    [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name cannot be empty"),

        body("email")
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email address"),

        body("password")
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
    ],
    register.insertregister
);

router.get("/:id", register.getregister);
router.put("/:id",
    [

    ], register.updateregister);
router.delete("/:id", register.deleteregister);



module.exports = router;