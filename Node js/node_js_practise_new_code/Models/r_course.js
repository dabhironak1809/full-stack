const course = require('../Controller/course.js');

const express = require('express');

const router = express.Router()

router.get('/',course.getCourse);
router.get('/:course_id',course.getCourses);
router.post('/',course.inserCourse);
router.put('/:course_id',course.updateCourse);
router.delete('/:course_id',course.deleteCourse);

module.exports=router;

