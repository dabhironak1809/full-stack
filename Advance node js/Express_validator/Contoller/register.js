const con = require("../db.js");
const {validationResult}=require ("express-validator")

const getregisters = (req, res) => {
    let sql = "select * from mail1";
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
    let sql = "select * from mail1 where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}
const deleteregister = (req, res) => {
    let sql = "delete from mail1 where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("deleted record")
        }
    })
}
const insertregister = (req, res) => {
    const errors  = validationResult(req)

    if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      message: "Validation errors occurred",
      errors: errors.array(),
    });
  }
    const sql = "insert into mail1(name,email,password)values(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send("data inserted")
        }
    })
}

const updateregister = (req, res) => {

    const sql = "update mail1 set name= ? ,email = ? , password=? where id=?"

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    con.query(sql, [...values, req.params.id], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("update record")
        }
    })
}



// 👇 place here
// const emailExists = (email) => {
//     return new Promise((resolve, reject) => {
//         const sql = "SELECT id FROM mail1 WHERE email = ?";
//         con.query(sql, [email], (err, data) => {
//             if (err) return reject(err);
//             resolve(data.length > 0);
//         });
//     });
// };
// email check on databse to exisiting email on not and user requirement to old email as it is or new email add 

// const emailExists = (email, userId) => {
//     return new Promise((resolve, reject) => {
//         const sql = "SELECT id FROM mail1 WHERE email = ? AND id != ?";
//         con.query(sql, [email, userId], (err, data) => {
//             if (err) return reject(err);
//             resolve(data.length > 0);
//         });
//     });
// };


module.exports = { getregister, getregisters, insertregister, deleteregister, updateregister,  }