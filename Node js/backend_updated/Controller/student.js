const con = require("../db.js");

//tyeps of request:
//params => where only single parameter
//query => where multiple parameters are required
//file=> where file is uploaded

const getStudents = (req, res) => {
  let sql = "SELECT * FROM student";
  con.query(sql, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
};

const getStudent = (req, res) => {
  let sql = "SELECT * FROM student WHERE id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
};

const insertStudent = (req, res) => {
  let sql = "insert into student(student_name,age) values(?)";
  const values = [req.body.student_name, req.body.age];
  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Data Inserted");
    }
  });
};

const updateStudent = (req, res) => {
  let sql = "update student set student_name=?,age=? where student_id=?";
  const values = [req.body.student_name, req.body.age];
  con.query(sql, [...values, req.params.student_id], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Data Updated");
    }
  });
};

const deleteStudent = (req, res) => {
  let sql = "delete from student where id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Data Deleted");
    }
  });
};

module.exports = {
  getStudents,
  getStudent,
  deleteStudent,
  insertStudent,
  updateStudent,
};
