const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const student = require("./Models/r_student.js");
app.use("/student", student);

app.listen("1111", () => {
    console.log("server start on 1111 port");

})