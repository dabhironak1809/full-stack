const express = require("express");
const router = express.Router();


const student = require('../Controller/student.js');


router.get("/",student.getstudents);
router.get("/:student_id",student.getstudent);
router.post("/",student.insertstudent);
router.put("/:student_id",student.updatestudent)
router.delete("/:student_id",student.deletestudent)

module.exports = router;
