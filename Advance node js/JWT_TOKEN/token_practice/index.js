// const express = require("express");
// const app = express();
// app.use(express.json());

// const userlogin = require("./Models/r_userlogin.js");
// app.use("/userlogin", userlogin)


// const stud = require("./Models/r_stud");
// app.use("/stud", stud);

// const PORT = process.env.PORT || 1111

// app.listen(PORT, () => {
//     console.log("server start on port 1111");
// })


const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const userloginroutes = require("./Models/r_userlogin.js");
const studroutes = require("./Models/r_stud.js");

app.use("/userlogin", userloginroutes);
app.use("/stud", studroutes);

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "api is running",
    });
});

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
    console.log("server start on 1111");

})