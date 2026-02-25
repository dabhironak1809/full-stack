const connnection = require("mysql")

const db = connnection.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemail"
})


db.connect(err => {
    if (err) throw err;
    // console.log("DB connected ✅");
});

module.exports = db;

