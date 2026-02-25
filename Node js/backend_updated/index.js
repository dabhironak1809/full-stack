const express = require("express");
const app = express();
app.use(express.json());

const student = require("./Models/r_student.js");
app.use("/student", student);

app.listen(1313, () => {
  console.log("Server started on port 1313");
});
