const connectDB = require("../db.js"); // connect to DB
connectDB(); // make sure DB is connected before any query

const Student = require("../models1/r_student.js");
const Course = require("../models1/r_course.js"); // Aa line umero
const Department = require("../models1/r_department.js"); // Aa line umero

// ----------------
// Banne table join kari ne data lavva mate (Aggregation Pipeline)

// const getStudentsWithCourses = async (req, res) => {
//   try {
//     const data = await Student.aggregate([
//       {
//         $lookup: {
//           from: "courses",         // 'courses' collection sathe join karo
//           localField: "course_id", // Student table ni id field
//           foreignField: "_id",     // Course table ni primary id
//           as: "course_details"     // Output field nu naam
//         }
//       },
//       {x
//         $unwind: "$course_details" // Array ne object ma convert karva mate
//       }
//     ]);
//     return res.send(data);
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// };

// ----------------



// Get all students
// const getstudents = async (req, res) => {
//   try {
//     const data = await Student.find();
//     return res.send(data);
//   } catch (err) {
//     return res.send(err);
//   }
// };

// Controller/student.js update karo

// const getstudents = async (req, res) => {
//   try {
//     const data = await Student.aggregate([
//       {
//         $lookup: {
//           from: "courses",         // Tamara courses collection nu name
//           localField: "course_id", // Student table ni id
//           foreignField: "_id",     // Course table ni id
//           as: "course_details"     // Output field name
//         }
//       },
//       {
//         $unwind: {
//           path: "$course_details",
//           preserveNullAndEmptyArrays: true // Jo course na hoy to pan student dekhay
//         }
//       }
//     ]);
//     return res.send(data);
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// };

// const getstudents = async (req, res) => {
//   try {
//     const data = await Student.aggregate([
//       {
//         $lookup: {
//           from: "Course",         // Compass ma collection nu name 'Course' hoy to ahi 'courses' lakhvu
//           localField: "course_id", // Student model ni field
//           foreignField: "_id",     // Course collection ni main ID
//           as: "course_details"     // Output field nu name
//         }
//       },
//       {
//         $unwind: {
//           path: "$course_details",
//           // preserveNullAndEmptyArrays: true // Jo student pase course na hoy to pan student batavse
//         }
//       }
//     ]);
//     return res.status(200).send(data);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };



// Get single student by ID
// const getstudent = async (req, res) => {
//   try {
//     const data = await Student.findById(req.params._id);
//     if (!data) return res.send("Student not found");
//     return res.send(data);
//   } catch (err) {
//     return res.send(err);
//   }
// };

// -------------

// -------------

const getSpecificStudent = async (req, res) => {
  try {
    const data = await Student.aggregate([
      {
        // 1. Pela e student ne shodho jeni ID matching hoy
        $match: { _id: new mongoose.Types.ObjectId(req.params._id) }
      },
      {
        // 2. Tenoj course details join karo
        $lookup: {
          from: "Course",
          localField: "course_id",
          foreignField: "_id",
          as: "course_info"
        }
      },
      { $unwind: "$course_info" },
      {
        // 3. Jo tame khali 'name' ane 'course_name' j jova mangta hoy to
        $project: {
          name: 1,
          mobile: 1,
          "course_info.course_name": 1,
          "course_info.fees": 1
        }
      }
    ]);

    if (data.length === 0) return res.send("Student not found");
    return res.status(200).send(data[0]); // Array mathi ek j student moklavo
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Insert student
// const insertstudent = async (req, res) => {
//   try {
//     const student = new Student({
//       name: req.body.name,
//       email: req.body.email,
//       mobile: req.body.mobile,
//     });
//     await student.save();
//     return res.send("Data inserted");
//   } catch (err) {
//     return res.send(err);
//   }
// };

// ------------   this to notmaly data fetch a course and department to this data fetch to one the normaly id using a data fetch .....

// const getstudents = async (req, res) => {
//   try {
//     const data = await Student.aggregate([
//       // 1. Course sathe Join
//       {
//         $lookup: {
//           from: "courses",         // Compass ma collection name 'courses' hovu joie
//           localField: "course_id",
//           foreignField: "_id",
//           as: "course_details"
//         }
//       },
//       // 2. Department sathe Join
//       {
//         $lookup: {
//           from: "departments",      // Compass ma collection name 'departments' hovu joie
//           localField: "dept_id",
//           foreignField: "_id",
//           as: "dept_details"
//         }
//       },
//       // Array ne Object ma convert karva mate
//       { $unwind: { path: "$course_details", preserveNullAndEmptyArrays: true } },
//       { $unwind: { path: "$dept_details", preserveNullAndEmptyArrays: true } }
//     ]);

//     return res.status(200).send(data);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };


// Insert student with Course Link
// const insertstudent = async (req, res) => {
//   try {
//     const student = new Student({
//       name: req.body.name,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       // Aa line thi student sathe course connect thase
//       course_id: req.body.course_id
//     });

//     await student.save();
//     return res.status(201).send("Student data inserted and linked to Course ✅");
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// };

// const insertStudentWithNewCourse = async (req, res) => {
//   try {
//     // Step A: Pehla navo course create karo
//     const newCourse = new Course({
//       course_name: req.body.course_name,
//       fees: req.body.fees,
//       duration: req.body.duration
//     });
//     const savedCourse = await newCourse.save();

//     // Step B: Te course ni ID lai ne student save karo
//     const student = new Student({
//       name: req.body.name,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       course_id: savedCourse._id // Auto link thase
//     });

//     await student.save();
//     return res.status(201).send("Course ane Student banne ek sathe add thai gaya! ✅");
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// };

// Delete student

//  const getstudents = async (req, res) => {
//   try {
//     const data = await Student.aggregate([
//       // 1. Course sathe Join
//       {
//         $lookup: {
//           from: "courses",         // Compass ma collection nu naam 'courses' che
//           localField: "course_id",
//           foreignField: "_id",
//           as: "course_details"
//         }
//       },
//       // 2. Department sathe Join
//       {
//         $lookup: {
//           from: "departments",      // Compass ma collection nu naam 'departments' che
//           localField: "dept_id",
//           foreignField: "_id",
//           as: "dept_details"
//         }
//       },
//       // Array mathi object ma badlav mate unwind
//       { $unwind: { path: "$course_details", preserveNullAndEmptyArrays: true } },
//       { $unwind: { path: "$dept_details", preserveNullAndEmptyArrays: true } }
//     ]);

//     return res.status(200).send(data);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };

// // Insert Student ma pan dept_id umero

//  const insertstudent = async (req, res) => {
//   try {
//     // Naam par thi database mathi record shodho
//     const course = await Course.findOne({ course_name: req.body.course_name });
//     const dept = await Department.findOne({ dept_name: req.body.dept_name });

//     if (!course || !dept) return res.status(404).send("Course or Dept not found!");

//     const student = new Student({
//       name: req.body.name,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       course_id: course._id, // Automatic ID find kari ne nakhse
//       dept_id: dept._id
//     });

//     await student.save();
//     return res.status(201).send("Automatic Link Successful! ✅");
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// };

const getstudents = async (req, res) => {
  try {
    const data = await Student.aggregate([
      // Join Course
      {
        $lookup: {
          from: "courses", // must match collection name in MongoDB
          localField: "course_id",
          foreignField: "_id",
          as: "course"
        }
      },
      // Join Department
      {
        $lookup: {
          from: "departments",
          localField: "dept_id",
          foreignField: "_id",
          as: "department"
        }
      },

      // Convert array to object
      { $unwind: { path: "$course", preserveNullAndEmptyArrays: true } },
      { $unwind: { path: "$department", preserveNullAndEmptyArrays: true } },

      // Select only fields you want
      {
        $project: {
          name: 1,
          email: 1,
          mobile: 1,

          course_id: 1,   // ✅ ADD THIS
          dept_id: 1,     // ✅ ADD THIS

          course_name: "$course.course_name",
          fees: "$course.fees",
          duration: "$course.duration",
          dept_name: "$department.dept_name",
          hod_name: "$department.hod_name"
        }
      }
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// INSERT: Frontend dropdown mathi ID avshe
const insertstudent = async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      course_id: req.body.course_id, // Frontend thi avti ID
      dept_id: req.body.dept_id      // Frontend thi avti ID
    });
    await student.save();
    return res.status(201).send("Student Added Successfully ✅");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};


const deletestudent = async (req, res) => {
  try {
    const data = await Student.findByIdAndDelete(req.params._id);
    if (!data) return res.send("Student not found");
    return res.send("Data deleted");
  } catch (err) {
    return res.send(err);
  }
};

// Update student
// const updatestudent = async (req, res) => {
//   try {
//     const data = await Student.findByIdAndUpdate(
//       req.params._id,
//       {
//         name: req.body.name,
//         email: req.body.email,
//         mobile: req.body.mobile,
//       },
//       { new: true, runValidators: true }
//     );
//     if (!data) return res.send("Student not found");
//     return res.send("Data updated");
//   } catch (err) {
//     return res.send(err);
//   }
// };


const updatestudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params._id,
      {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        course_id: req.body.course_id,   // update course
        dept_id: req.body.dept_id        // update department
      },
      {
        new: true,           // return updated data
        runValidators: true  // apply schema validation
      }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({
      message: "Student Updated Successfully ✅",
      data: updatedStudent
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSpecificStudent,
  getstudents,
  insertstudent,
  deletestudent,
  updatestudent,

};