const connectino = require("mysql");

const db = connectino.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stud"
});

module.exports = db;