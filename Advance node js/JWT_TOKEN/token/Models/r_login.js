const express = require("express");

const router = express.Router();

const verifytoken1 = require("../middleware/auth1.js");

const log = require("../Controller/login.js")

router.post("/", log.login);

router.get("/profile",verifytoken1,(req,res)=>{
    res.status(200).json({
        status:200,
        message:"profile data",
        user:req.user,
    });
});

module.exports = router