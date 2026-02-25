// const db = require("mysql")

// const connection = db.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "stud"
// });

// console.log(connection);


// module.exports = connection;

const connection = require("mysql");

const db = connection.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stud"
});

// db.connect(err => {
//     if (err) throw err;
//     console.log("DB connected ✅");
// });

module.exports = db;