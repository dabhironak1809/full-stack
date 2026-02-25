const express = require("express");
const router = express.Router();

const student = require("../Controller/student.js");

router.get("/", student.getStudents);
router.get("/:student_id", student.getStudent);
router.post("/", student.insertStudent);
router.put("/:student_id", student.updateStudent);
router.delete("/:student_id", student.deleteStudent);

module.exports = router;
