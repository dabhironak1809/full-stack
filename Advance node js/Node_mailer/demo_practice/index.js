const express = require("express");
const app = express();
app.use(express.json());

const stud = require("./Models/r_register.js");
app.use("/stud", stud)

app.listen("1111", () => {
    console.log(("server start on port 1111"));

})

