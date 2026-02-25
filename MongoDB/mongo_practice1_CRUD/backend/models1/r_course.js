const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  fees: { type: Number, required: true },
  duration: { type: String, required: true }
});

module.exports = mongoose.model("Course", courseSchema);