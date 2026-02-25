const connection = require("mysql");

const db = connection.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"image"
})

module.exports = db;