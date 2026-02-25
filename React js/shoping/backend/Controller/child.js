const con = require("../db.js");

const getchilds = (req, res) => {
    let sql = "select * from child";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getchild = (req, res) => {
    let sql = "select * from child where child_id=?";
    con.query(sql, req.params.child_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

const insertchild = (req, res) => {
    let sql = "insert into child(name,description,price,img)values(?)";
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req?.file?.filename
    ]
    con.query(sql, [values],(err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("insert data")
        }
    })
}

const deletechild = (req, res) => {
    let sql = "delete from child where child_id=?";
    con.query(sql, req.params.child_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}

const updatechild = (req, res) => {
    let sql = "update child set name=?,description=?, price=?, img=? where child_id=?";
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
    ]
    con.query(sql, [...values, req.params.child_id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data updated")
        }
    })
}

module.exports = { getchild, getchilds, insertchild, deletechild, updatechild }