const teacher = require('../Controller/teacher.js');

const express = require('express');
const router = express.Router();

router.get('/',teacher.getTeacher);
router.get('/:teacher_id',teacher.getTeachers);
router.post('/',teacher.insertTeacher);
router.put('/:teacher_id',teacher.updateTeacher);
router.delete('/:teacher_id',teacher.deleteTeacher);

module.exports = router;
