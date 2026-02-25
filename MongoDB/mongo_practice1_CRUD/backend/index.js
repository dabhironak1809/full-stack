// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./db.js");
// const Student = require("./models/Student");

// const app = express();

// // Connect Database
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test Route
// app.get("/", (req, res) => {
//     res.send("Server Running 🚀");
// });


// // CREATE Student
// app.post("/students", async (req, res) => {
//     try {
//         const student = await Student.create(req.body);
//         res.status(201).json(student);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // GET All Students
// app.get("/students", async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Start Server
// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
// });


// ----------------

// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./db");   // 👈 important (same folder)

// const student = require("./models/r_student.js")


// const app = express();

// // Connect Database
// connectDB();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Server Running 🚀");
// });

// app.use("/student",student)

// app.listen(process.env.PORT || 1111, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
// });



require("dotenv").config();
const express = require("express");
const connectDB = require("./db");   // make sure db.js exports the MongoDB connection
const studentRoutes = require("./models/r_student.js"); // your student routes

const courseRoutes = require("./models/r_course.js")

const departmentroutes = require("./models/r_department.js")

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json()); // for parsing application/json
const cors = require("cors");
app.use(cors()); // enable CORS for all routes

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

// Student Routes
// Ensure your frontend uses "http://localhost:1111/student"
app.use("/student", studentRoutes);

app.use("/course",courseRoutes)

app.use("/department",departmentroutes)




// Start Server
const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});