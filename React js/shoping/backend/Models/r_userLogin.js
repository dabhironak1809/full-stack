const express=require("express");
const controllers=require("../Controller/userLogin.js");
const login=express.Router();
// const { query } = require('express-validator');

login.get("/",
    // [
    //     query("s_mobile").notEmpty().withMessage("Mobile No. is Required").isMobilePhone().withMessage("Invalid number"),
    //     query("s_password").notEmpty().withMessage("Password  is Required")
    // ],

    controllers.userLogin);

module.exports=login;

