const con = require("../db.js");

const getmobiles = (req, res) => {
    let sql = "select * from mobile";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}

const getmobile = (req, res) => {
    let sql = "select * from mobile where mobile_id=?"
    con.query(sql, req.params.mobile_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    });
}

const insermobile = (req, res) => {
    let sql = "insert into mobile(name,description,price,img)values(?)"
    // let sql = "insert into mobile(name,description,price)values(?)"

    // console.log("data : ",res);
    
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req?.file?.filename
    ]
    // console.log("value : ",values);
    
    con.query(sql, [values], (err, data) => {
        // console.log("data inset :",data);
        
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("insert data ")
        }
    })
}

const deletemobile = (req,res)=>{
    let sql = "delete from mobile where mobile_id=?";
    con.query(sql,req.params.mobile_id,(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data deleted")
        }
    })
}


const updatemobile = (req,res)=>{
    let sql = "update mobile set name=?,description=?, price=?, img=? where mobile_id=?"
    con
    const values = [
         req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
    ]
    con.query(sql,[...values,req.params.mobile_id],(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data updated")
        }
    })
}

module.exports= {getmobile,getmobiles,insermobile,deletemobile,updatemobile}