const con = require("../db.js");

const getstudents = (req, res) => {
  let sql = "select * from student";
  con.query(sql, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
};
const getstudent = (req, res) => {
  let sql = "select * from student where student_id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data[0]);
    }
  });
};
const insertstudent = (req, res) => {
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
const deletestudent = (req, res) => {
  let sql = "delete from student where student_id=?";
  con.query(sql, req.params.student_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data deleted");
    }
  });
};
const updatestudent = (req, res) => {
  let sql =
    "update student set student_name=?, student_email=?, student_mobile=? where student_id=?";
  const values = [
    req.body.student_name,
    req.body.student_email,
    req.body.student_mobile,
  ];
  con.query(sql, [...values, req.params.student_id], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data updated");
    }
  });
};
module.exports = {
  getstudent,
  getstudents,
  insertstudent,
  deletestudent,
  updatestudent,
};
