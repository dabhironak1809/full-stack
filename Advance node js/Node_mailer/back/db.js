const connnection = require("mysql")

const db = connnection.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoping"
})


db.connect(err => {
    if (err) throw err;
    // console.log("DB connected ✅");
});

module.exports = db;

