const express = require("express");
const app = express();
app.use(express.json());

const userlogin = require("./Models/r_userlogin.js");
app.use("/userlogin", userlogin)

const stud = require("./Models/r_stud.js")
app.use("/stud", stud);


const PORT = process.env.PORT || 1111

app.listen(PORT, () => {
    console.log("server start on port 1111");
})