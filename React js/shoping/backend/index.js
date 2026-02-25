const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());


app.use("/men_img", express.static(path.join(__dirname, "men_img")));

app.use("/mobile_img", express.static(path.join(__dirname, "mobile_img")));

app.use("/kitchan_img", express.static(path.join(__dirname, "kitchan_img")))

app.use("/women_img", express.static(path.join(__dirname, "women_img")))

app.use("/leaptop_img", express.static(path.join(__dirname, "leaptop_img")))

app.use("/child_img", express.static(path.join(__dirname, "child_img")))

const men = require("./Models/r_men.js");
app.use("/men", men);


const women = require("./Models/r_women.js");
app.use("/women", women)

const child = require("./Models/r_child.js");
app.use("/child", child)


const kitchan = require("./Models/r_kitchan.js")
app.use("/kitchan", kitchan)

const leaptop = require("./Models/r_leaptop.js")
app.use("/leaptop", leaptop)

const mobile = require("./Models/r_mobile.js")
app.use("/mobile", mobile)

const cart = require("./Models/r_cart.js");
app.use("/cart", cart);

const order = require("./Models/r_orders.js");
app.use("/order", order);


 

const userlogin = require("./Models/r_userLogin.js")
app.use("/userlogin", userlogin)



// const login = require("./Models/r_user_log.js")
// app.use("/login",login)

// const admin_login = require("./Models/r_adminlogin.js");
// app.use("/admin_login", admin_login)

// const admin = require("./Models/r_a.js")
// app.use("/admin",admin)

const admin = require("./Models/r_a.js");
app.use("/admin", admin);

const userregister = require("./Models/r_user_register.js");
app.use("/userregister", userregister);




app.listen("1111", () => {
    console.log("server start on 1111");

})