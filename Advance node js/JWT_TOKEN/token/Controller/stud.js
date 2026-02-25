const con = require("../db.js");

const getstuds = (req, res) => {
    let sql = "select * from demo";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getstud = (req, res) => {
    let sql = "select * from demo where s_id=?";
    con.query(sql, req.params.s_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}


const insertstud = (req, res) => {
    let sql = "insert into demo(name,mobile,email,password)values(?)";
    const values = [
        req.body.name,
        req.body.mobile,
        req.body.email,
        req.body.password
    ]
    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data inserted")
        }
    })
}

const updatestude = (req, res) => {
    let sql = "update demo set name=?, mobile=?,email=?,password=? where s_id=?";

    const values = [
        req.body.name,
        req.body.mobile,
        req.body.email,
        req.body.password
    ]

    con.query(sql, [...values, req.params.s_id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("update record")
        }
    })
}

const deletstud = (req, res) => {
    let sql = "delete from demo where s_id=?";

    con.query(sql, req.params.s_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}


module.exports = { getstud, getstuds, deletstud, insertstud, updatestude }