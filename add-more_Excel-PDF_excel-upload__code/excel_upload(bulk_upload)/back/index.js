const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors());

// const register = require("./Models/r_register.js");
const exceluplod = require("./Models/r_excelUpload.js")

// app.use("/register",register)
app.use("/register",exceluplod)

app.listen("1111",()=>{
    console.log("server start on port -> 1111");
    
})