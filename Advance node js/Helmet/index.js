const express = require("express");
const app = express();
const helmet = require("helmet");

// 🔐 Helmet MUST be first
// app.use(helmet());
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],       // REQUIRED
                scriptSrc: ["'self'"],        // JS only from same server
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:"],
                connectSrc: ["'self'"],
            },
        },
    })
);


// Body parser
app.use(express.json());

const stud = require("./Models/r_register.js");
app.use("/stud", stud)

app.listen("1111", () => {
    console.log(("server start on port 1111"));

})



