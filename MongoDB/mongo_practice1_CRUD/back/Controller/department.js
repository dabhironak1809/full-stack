const Department = require("../models1/r_department.js");

// Get all departments
const getdepartments = async (req, res) => {
  try {
    const data = await Department.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Insert navu department
const insertdepartment = async (req, res) => {
  try {
    const newDept = new Department({
      dept_name: req.body.dept_name,
      hod_name: req.body.hod_name,
      location: req.body.location
    });
    await newDept.save();
    return res.status(201).send("Department successfully added! ✅");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = { getdepartments, insertdepartment };