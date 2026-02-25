const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

// const userlogin = require("./Models/r_userLogin.js")
// app.use("/userlogin", userlogin)


 
const userregister = require("./Models/r_user_register.js");
app.use("/userregister", userregister);




app.listen("1111", () => {
    console.log("server start on 1111");

})