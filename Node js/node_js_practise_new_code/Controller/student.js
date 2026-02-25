const con = require("../db.js");

const getStudents = (req, res) => {
  let sql = "SELECT * FROM student";
//console.log(sql)
  con.query(sql, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
};

const getStudent = (req, res) => {
  let sql = "SELECT * FROM student where student_id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data[0]);
    }
  });
};

const insetStudent = (req, res) => {
  let sql =
    "insert into student(student_name,student_email,student_mobile)values(?)";
  const values = [
    req.body.student_name,
    req.body.student_email,
    req.body.student_mobile,
  ];

  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data inserted");
    }
  });
};

const deleteStudent = (req, res) => {
  let sql = "delete from student where student_id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data deleted");
    }
  });
};

const updateStudent = (req, res) => {
  let sql =
    "update student set student_name=? , student_email=? ,student_mobile=? where student_id=? ";
  const values = [
    req.body.student_name,
    req.body.student_email,
    req.body.student_mobile,
  ];

  con.query(sql, [...values, req.params.student_id], (err, dara) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data updated");
    }
  });
};

module.exports = {
  getStudent,
  getStudents,
  insetStudent,
  deleteStudent,
  updateStudent,
};
