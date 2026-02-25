const Course = require("../models1/r_course.js");

// Get all courses
const getcourses = async (req, res) => {
  try {
    const data = await Course.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Insert navo course
const insertcourse = async (req, res) => {
  try {
    const newCourse = new Course({
      course_name: req.body.course_name,
      fees: req.body.fees,
      duration: req.body.duration
    });
    await newCourse.save();
    return res.status(201).send("Course successfully added! ✅");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

// Update Course
const updatecourse = async (req, res) => {
  try {
    const data = await Course.findByIdAndUpdate(req.params._id, req.body, { new: true });
    return res.send("Course updated successfully");
  } catch (err) {
    return res.send(err.message);
  }
};

// Delete Course
const deletecourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params._id);
    return res.send("Course deleted");
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports = { getcourses, insertcourse, updatecourse, deletecourse };