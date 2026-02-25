const con = require("../db.js");

const getwomens = (req, res) => {
    let sql = "select * from women";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getwomen = (req, res) => {
    let sql = "select * from women where women_id=?"
    con.query(sql, req.params.women_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

const insertwomen = (req, res) => {
    let sql = "insert into women (name,description,price,img)values(?)";
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req?.file?.filename
    ]
    con.query(sql,[values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data inserted")
        }
    })
}

const deletewomen = (req, res) => {
    let sql = "delete from women where women_id=?";
    con.query(sql, req.params.women_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}

const updatawomen = (req, res) => {
    let sql = "update women set name=?,description=?, price=?, img=? where women_id=?"
    values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
    ]
    con.query(sql,[...values, req.params.women_id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data updated")
        }
    })
}

module.exports = {getwomen,getwomens,insertwomen,deletewomen,updatawomen}