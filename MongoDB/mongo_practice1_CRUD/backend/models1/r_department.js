const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  dept_name: { type: String, required: true },
  hod_name: { type: String, required: true }, // Head of Department
  location: { type: String, default: "Main Building" }
}, { timestamps: true });

// Mongoose automatic 'departments' naam nu collection banavse
module.exports = mongoose.model("Department", departmentSchema);