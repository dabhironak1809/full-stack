const con = require("../db.js");

const getemps = (req, res) => {
    let sql = "select * from emp";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}


const getemp = (req, res) => {
    let sql = "select * from emp where emp_id=?";
    con.query(sql, req.params.emp_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

const insertemp = (req, res) => {
    let sql = "insert into emp(emp_name,emp_email,emp_mobile)values(?)";
    const values = [
        req.body.emp_name,
        req.body.emp_email,
        req.body.emp_mobile,
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

const updateemp = (req, res) => {
    let sql = "update emp set emp_name=?,emp_email=?, emp_mobile=? where emp_id=?";

    const values = [
        req.body.emp_name,
        req.body.emp_email,
        req.body.emp_mobile,

    ]

    con.query(sql, [...values, req.params.emp_id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("update record")
        }
    })
}

const deletemp = (req, res) => {
    let sql = "delete from emp where emp_id=?";

    con.query(sql, req.params.emp_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}

module.exports = { getemp, getemps, insertemp, deletemp, updateemp }