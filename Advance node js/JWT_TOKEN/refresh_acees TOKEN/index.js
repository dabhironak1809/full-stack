const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// routes
const userloginRoutes = require("./Models/r_userlogin.js");
const studRoutes = require("./Models/r_stud.js");

// mount routes
app.use("/userlogin", userloginRoutes);
app.use("/stud", studRoutes);
    
// health check (optional but useful)
app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "API is running 🚀",
    });
});

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
