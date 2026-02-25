const express = require("express");

const app = express();

const register = require("./Models/r_register.js");

app.use(express.json());

app.use("/register", register);

app.listen("1111", () => {
    console.log("server start on port 1111");

})  