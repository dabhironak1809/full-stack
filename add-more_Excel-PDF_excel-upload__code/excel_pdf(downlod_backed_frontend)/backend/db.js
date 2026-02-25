const db = require('mysql')

const connection = db.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"add_more"
})

module.exports = connection;