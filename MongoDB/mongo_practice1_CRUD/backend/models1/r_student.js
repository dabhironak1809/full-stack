// // models/r_student.js
// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },       // Student Name
//   email: { type: String, required: true },      // Student Email
//   mobile: { type: String, required: true },     // Student Mobile
//   createdAt: { type: Date, default: Date.now }, // Optional: created timestamp
// });

// module.exports = mongoose.model("Student", studentSchema);

// -------

// // models/r_student.js
// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   mobile: { type: String, required: true },
//   // Aa field Courses collection sathe join karva mate che
//   course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }, 
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Student", studentSchema);


const mongoose = require("mongoose"); // AA LINE UMERVI JARURI CHE

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }
});

module.exports = mongoose.model("Student", studentSchema);