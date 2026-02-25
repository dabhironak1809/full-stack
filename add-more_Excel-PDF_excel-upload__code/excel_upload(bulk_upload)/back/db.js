const db = require('mysql')

const connection = db.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bulk_upload"
})

module.exports = connection;