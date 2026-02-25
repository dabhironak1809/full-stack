// // r_student.js
// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Student", studentSchema);

// studentRoutes.js


const express = require("express");
const router = express.Router();
const studentController = require("../Controller/student.js");

// Routes
router.get("/", studentController.getstudents);
router.get("/:_id", studentController.getSpecificStudent);
router.post("/", studentController.insertstudent);
router.put("/:_id", studentController.updatestudent);
router.delete("/:_id", studentController.deletestudent);

module.exports = router;