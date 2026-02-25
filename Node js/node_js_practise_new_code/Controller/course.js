const con = require('../db.js');

const getCourse = (req,res)=>{
    let sql = "select * from course ";
    con.query(sql,(err,data)=>{
        if(err)
        {
            return res.send(err)
        }
        else{
            return res.send(data)
        }
    });
};

const getCourses = (req,res)=>{
    let sql = "select * from course where course_id=?";
    con.query(sql,req.params.course_id,(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send(data[0])
        }
    });
};

const inserCourse = (req,res)=>{
    let sql = "INSERT INTO `course`(`course_code`, `course_title`, `credits`)values(?)";
    const values = [req.body.course_code, req.body.course_title, req.body.credits ];
    con.query(sql,[values],(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data inserted")
        }
    });
};

const deleteCourse = (req,res)=>{
    let sql = "delete from course where course_id=?";
    con.query(sql,req.params.course_id,(err,data)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send("data deleted")
        }
        
    });
};

const updateCourse = (req,res)=>{
    let sql = "update course set course_code=?, course_title=?, credits=? where course_id=?";
    
    const values = [
        req.body.course_code,
        req.body.course_title,
        req.body.credits
    ]
    con.query(sql,[...values,req.params.course_id],(err,data)=>{

        if(err){
            return res.send(err)
        }
        else{
            return res.send("data updated")
        }
    })
    
    
}

module.exports={getCourse,getCourses,inserCourse,deleteCourse,updateCourse};