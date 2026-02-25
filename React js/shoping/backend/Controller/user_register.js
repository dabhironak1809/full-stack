const con = require("../db.js");

const userallget = (req, res) => {
    let sql = "select * from user";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
} 
const userget = (req, res) => {
    let sql = "select * from user where user_id=?";
    con.query(sql, req.params.user_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}


const userdatainsert = (req, res) => {
    let sql = "insert into user(user_name,mobile_number,email,password)values(?)";

    const values = [
        req.body.user_name,
        req.body.mobile_number,
        req.body.email,
        req.body.password,
    ];

    con.query(sql,[values],(err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("insert data succes")
        }
    })
}


const userdelete = (req, res) => {
    let sql = "delete from user where user_id=?";
    con.query(sql, req.params.user_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}


module.exports={userallget,userget,userdatainsert,userdelete}