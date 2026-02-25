const con = require("../db.js");

const getkitchans = (req, res) => {
    let sql = "select * from kitchan";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getkitchan = (req, res) => {
    let sql = "select * from kitchan where kitchan_id=?"
    con.query(sql, req.params.kitchan_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    });
}

const inserkitchan = (req, res) => {
    let sql = "insert into kitchan(name,description,price,img)values(?)"
    // let sql = "insert into kitchan(name,description,price)values(?)"
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

const deletekitchan = (req,res)=>{
    let sql = "delete from kitchan where kitchan_id=?";
    con.query(sql,req.params.kitchan_id,(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data deleted")
        }
    })
}


const updatekitchan = (req,res)=>{
    let sql = "update kitchan set name=?,description=?, price=?, img=? where kitchan_id=?"
    con
    const values = [
         req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
    ]
    con.query(sql,[...values,req.params.kitchan_id],(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data updated")
        }
    })
}

module.exports= {getkitchan,getkitchans,inserkitchan,deletekitchan,updatekitchan}