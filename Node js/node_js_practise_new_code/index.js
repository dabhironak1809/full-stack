const express = require('express');
const cors= require('cors')
const app = express();
app.use(express.json());
// premisiion or another web page using API using perfrom  operations.
app.use(cors()) 

const student = require("./Models/r_student.js");
app.use("/student", student);

const teacher = require("./Models/r_teacher.js");
app.use("/teacher",teacher);

const course = require('./Models/r_course.js');
app.use("/course",course);

const department = require('./Models/r_department.js');
app.use('/department', department);

const enrollment = require('./Models/r_entollment.js');
app.use("/enrollment",enrollment);

app.listen("0910", () => {
  console.log("server startes on port 0910");
});
