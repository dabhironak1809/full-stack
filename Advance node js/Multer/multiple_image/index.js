const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());


// Serve uploaded images
app.use("/image", express.static(path.join(__dirname, "image")));

 
const stud1 = require("./Models/r_stud1.js");
app.use("/stud1", stud1)

app.listen("1111", () => {
    console.log("server start on port 1111");

})