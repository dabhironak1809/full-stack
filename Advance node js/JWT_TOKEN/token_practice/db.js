const connection = require("mysql");

const db = connection.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stud"
})

module.exports = db;