const con = require("../db.js");

const getTeacher = (req, res) => {
    let sql = "SELECT * FROM teacher";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};

const getTeachers = (req, res) => {
    let sql = "SELECT * FROM teacher WHERE teacher_id=?";
    con.query(sql, req.params.teacher_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data[0]);
        }
    });
};

const insertTeacher = (req, res) => {
    let sql = "insert into teacher (teacher_name, teacher_email, teacher_mobile)values(?)";
    const values = [
        req.body.teacher_name,
        req.body.teacher_email,
        req.body.teacher_mobile,
    ];
    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("data inserted");
        }
    });
};

const deleteTeacher = (req, res) => {
    let sql = "delete from teacher where teacher_id=?";
    con.query(sql, req.params.teacher_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("data deleted");
        }
    });
};

const updateTeacher = (req, res) => {
    let sql =
        "update teacher set teacher_name=?, teacher_email=?, teacher_mobile=? where teacher_id=? ";
    const values = [
        req.body.teacher_name,
        req.body.teacher_email,
        req.body.teacher_mobile,
    ];
    con.query(sql, [...values, req.params.teacher_id], (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("data updated");
        }
    });
};

module.exports = {
    getTeacher,
    getTeachers,
    insertTeacher,
    deleteTeacher,
    updateTeacher,
};
