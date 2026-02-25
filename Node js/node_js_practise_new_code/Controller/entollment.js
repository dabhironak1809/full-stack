const con = require("../db.js");

const getenrollment = (req, res) => {
  let sql = "select * from enrollment";
  con.query(sql, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
};

const getenrollments = (req, res) => {
  const sql = "select * from enrollment where enrollment_id=?";
  con.query(sql, req.params.enrollment_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data[0]);
    }
  });
};

const insertenrollment = (req, res) => {
  let sql =
    "insert into enrollment(student_id,course_code,semester,final_grade)values(?)";
  const value = [
    req.body.student_id,
    req.body.course_code,
    req.body.semester,
    req.body.final_grade,
  ];
  con.query(sql, [value], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data inserted");
    }
  });
};

const deleteenrollment = (req, res) => {
  let sql = "delete from enrollment where enrollment_id=?";
  con.query(sql, req.params.enrollment_id, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data deleted");
    }
  });
};

const updateenrollment = (req, res) => {
  const sql =
    "update enrollment set student_id=? , course_code=? , semester=? , final_grade=? where enrollment_id=?";
  const values = [
    req.body.student_id,
    req.body.course_code,
    req.body.semester,
    req.body.final_grade,
  ];

  con.query(sql, [...values, req.params.enrollment_id], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("data updated");
    }
  });
};

module.exports = {
  getenrollment,
  getenrollments,
  insertenrollment,
  deleteenrollment,
  updateenrollment,
};
