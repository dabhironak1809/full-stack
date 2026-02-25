const con = require("../db.js");

const getregisters = (req, res) => {
    let sql = "select * from register"

    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getregister = (req, res) => {
    let sql = "select * from register where id=?"
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

const insertregister = (req, res) => {
    const users = req.body;// array for frontend sent and store 
    if (!Array.isArray(users)) {
        return res.status(400).send("data must be array")
    }
    const values = users.map(user => [
        user.name,
        user.email,
        user.mobile
    ]);
    
    let sql = "insert into register(name,email,mobile)values ?"
    
    con.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);            
            return res.send(err)
        }
        else {
            return res.send("multiple data inserted  ")
        }
    })
}

const deleteregister = (req, res) => {
    let sql = "delete from register where id=?"

    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}

const updateregister = (req, res) => {
    let sql = "update register set name=?,email=?,mobile=? where id=?"

    const values = [
        req.body.name,
        req.body.email,
        req.body.mobile
    ]

    con.query(sql, [...values, req.params.id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data updated")
        }
    })
}

module.exports = { getregister, getregisters, insertregister, deleteregister, updateregister }