const express = require("express");
const app = express();
app.use(express.json());

// const stude = require("./Models/r_stud.js");
// app.use("/stude", stude);

const emp1 = require("./Models/r_emp.js");
app.use("/emp1", emp1);

const userlogin = require("./Models/r_userlogin.js");
app.use("/userlogin", userlogin)

const login = require("./Models/r_login.js");
app.use("/login", login)


const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
    console.log('server start on 1111')
})