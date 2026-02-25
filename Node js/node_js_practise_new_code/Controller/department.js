// dept_id, dept_name,head_faculty_id

const con = require('../db.js');

const getdepartment = (req, res) => {
    let sql = "select * from department";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    });
};

const getdepartments = (req, res) => {
    let sql = "select * from department where dept_id=?";

    con.query(sql, req.params.dept_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    });
};

const insetDepartment = (req, res) => {
    let sql = "insert into department(dept_name,head_faculty_id) values(?)";
    const values = [req.body.dept_name, req.body.head_faculty_id];
    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data inserted");
        }
        
    });
};

const deleteDepartment = (req,res)=>{
    let sql = "delete from department where dept_id=?";
    con.query(sql,req.params.dept_id,(err,data)=>{
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted");
        }
    });
};


const updateDepartment = (req,res)=>{
    let sql = "update department set dept_name=?,head_faculty_id=? where dept_id=?";
    const values = [req.body.dept_name, req.body.head_faculty_id];
    con.query(sql,[...values,req.params.dept_id],(err,data)=>{
         if (err) {
            return res.send(err)
        }
        else {
            return res.send("data updated");
        }
    });

};

module.exports= {getdepartment,getdepartments,insetDepartment,deleteDepartment,updateDepartment};
