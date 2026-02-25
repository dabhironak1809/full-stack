const con = require("../db.js");

const getleaptops = (req, res) => {
    let sql = "select * from leaptop";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getleaptop = (req, res) => {
    let sql = "select * from leaptop where leaptop_id=?"
    con.query(sql, req.params.leaptop_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    });
}

const inserleaptop = (req, res) => {
    let sql = "insert into leaptop(name,description,price,img)values(?)"
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req?.file?.filename
    ]
    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("insert data ")
        }
    })
}

const deleteleaptop = (req,res)=>{
    let sql = "delete from leaptop where leaptop_id=?";
    con.query(sql,req.params.leaptop_id,(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data deleted")
        }
    })
}


const updateleaptop = (req,res)=>{
    let sql = "update leaptop set name=?,description=?, price=?, img=? where leaptop_id=?"
    con
    const values = [
         req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
    ]
    con.query(sql,[...values,req.params.leaptop_id],(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data updated")
        }
    })
}

module.exports= {getleaptop,getleaptops,inserleaptop,updateleaptop,deleteleaptop}