// "use client"; // Next.js 13+ app directory

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function StudentForm() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setmobile] = useState("");
//     const [student, setStudent] = useState([]); // default empty array
//     // const [editingId, setEditingId] = useState(null);
//     const [editingId, setEditingId] = useState(null); // track editing record

//     useEffect(() => {
//         getStudents();
//     }, []);

//     const getStudents = async () => {
//         try { 
//             const res = await axios.get("http://localhost:1111/student");
//             setStudent(res.data);
//         } catch (error) {
//             console.error("Error fetching students:", error);
//         }
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     try {
//     //         const data = new FormData();
//     //         data.append("name", name);
//     //         data.append("email", email);
//     //         data.append("mobile", mobile);

//     //         const res = await axios.post("http://localhost:1111/student", data);
//     //         if (res.data) {
//     //             alert("Student data inserted successfully!");
//     //             setName("");
//     //             setEmail("");
//     //             setmobile("");
//     //             getStudents(); // refresh table
//     //         }
//     //     } catch (error) {
//     //         console.error("Error inserting student:", error);
//     //     }
//     // };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const res = await axios.post("http://localhost:1111/student", {
//     //             name,
//     //             email,
//     //             mobile,
//     //         });
//     //         if (res.data) {
//     //             alert("Student data inserted successfully!");
//     //             setName("");
//     //             setEmail("");
//     //             setmobile("");
//     //             getStudents(); // refresh table
//     //         }
//     //     } catch (error) {
//     //         console.error("Error inserting student:", error);
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {

//             if (editingId) {
//                 await axios.put(`http://localhost:1111/student/${editingId}`, {
//                     name, email, mobile
//                 });
//                 alert("Student updated successfully!");
//                 setEditingId(null); // reset editing state
//                 getStudents()
//             } else {

//                 const res = await axios.post("http://localhost:1111/student", {
//                     name,
//                     email,
//                     mobile,
//                 });
//                 if (res.data) {
//                     alert("Student data inserted successfully!");
//                     setName("");
//                     setEmail("");
//                     setmobile("");
//                     getStudents(); // refresh table
//                 }
//             }
//         } catch (error) {
//             console.error("Error submitting student:", error);
//         }
//     };



//     const handledelete = async (_id) => {
//         try {
//             await axios.delete(`http://localhost:1111/student/${_id}`);
//             alert("studen delete succesfully");
//             getStudents();
//         } catch (error) {
//             console.error("error deleteting student", error)
//         }
//     }

//     const handleUpdate = (rec) => {
//         setName(rec.name);
//         setEmail(rec.email);
//         setmobile(rec.mobile);
//         setEditingId(rec._id);
//     };


//     return (
//         <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-10">
//             {/* Form */}
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md mb-10"
//             >
//                 <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//                     Student Form
//                 </h2>

//                 {/* Name */}
//                 <div className="relative z-0 mb-6 w-full group">
//                     <input
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder=" "
//                         className="peer block w-full px-4 py-3 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <label
//                         className={`absolute left-0 text-gray-500 text-sm transition-all
//       ${name
//                                 ? "top-0 text-blue-500 text-sm"
//                                 : "top-3 text-gray-500 text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400"
//                             }`}
//                     >
//                         Name
//                     </label>
//                 </div>

//                 {/* Email */}
//                 <div className="relative z-0 mb-6 w-full group">
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder=" "
//                         className="peer block w-full px-4 py-3 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <label
//                         className={`absolute left-0 text-gray-500 transition-all
//     ${email ? "top-0 text-blue-500 text-sm" : "top-3 text-gray-500 text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400"}`}
//                     >
//                         Email
//                     </label>
//                 </div>

//                 {/* Password */}
//                 <div className="relative z-0 mb-8 w-full group">
//                     <input
//                         type="tel"
//                         name="mobile"
//                         value={mobile}
//                         onChange={(e) => setmobile(e.target.value)}
//                         placeholder=" "
//                         className="peer block w-full px-4 py-3 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <label
//                         className={`absolute left-0 text-gray-500 transition-all
//     ${mobile ? "top-0 text-blue-500 text-sm" : "top-3 text-gray-500 text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400"}`}
//                     >
//                         Mobile
//                     </label>
//                 </div>

//                 {/* Submit */}
//                 <button
//                     type="submit"
//                     className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105"
//                 >
//                     {editingId ? "Update" : "Submit"}
//                 </button>
//             </form>

//             {/* Records Table */}
//             {/* <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-2xl">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Submitted Records</h3>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full border border-gray-300 text-gray-700 text-sm">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">Name</th>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">Email</th>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">mobile</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {student.length > 0 ? (
//                                 student.map((rec, idx) => (
//                                     <tr key={idx} className="hover:bg-gray-50 transition">
//                                         <td className="border px-6 py-3">{rec.name}</td>
//                                         <td className="border px-6 py-3">{rec.email}</td>
//                                         <td className="border px-6 py-3">{rec.mobile}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td className="border px-6 py-3 text-center" colSpan={3}>
//                                         No records found
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div> */}
//             <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-2xl">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Submitted Records</h3>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full border border-gray-300 text-gray-700 text-sm">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">Name</th>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">Email</th>
//                                 <th className="border px-6 py-3 text-left uppercase font-medium tracking-wider">Mobile</th>
//                                 <th className="border px-6 py-3 text-center uppercase font-medium tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {student.length > 0 ? (
//                                 student.map((rec, idx) => (
//                                     <tr key={idx} className="hover:bg-gray-50 transition">
//                                         <td className="border px-6 py-3">{rec.name}</td>
//                                         <td className="border px-6 py-3">{rec.email}</td>
//                                         <td className="border px-6 py-3">{rec.mobile}</td>
//                                         <td className="border px-6 py-3 text-center space-x-2">
//                                             <div className="flex gap-2">

//                                                 {/* Update button */}
//                                                 <button
//                                                     onClick={() => handleUpdate(rec)}
//                                                     className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
//                                                 >
//                                                     Update
//                                                 </button>
//                                                 {/* Delete button */}
//                                                 <button
//                                                     onClick={() => handledelete(rec._id)}
//                                                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td className="border px-6 py-3 text-center" colSpan={4}>
//                                         No records found
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }


// ----------------

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function StudentForm() {

      // ✅ THIS IS IMPORTANT
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    mobile: "",
    course_id: "",
    dept_id: ""
  });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setmobile] = useState("");

    const [courseId, setCourseId] = useState("");
    const [deptId, setDeptId] = useState("");

    const [courses, setCourses] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [student, setStudent] = useState([]);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        getStudents();
        getCourses();
        getDepartments();
    }, []);

    const getStudents = async () => {
        const res = await axios.get("http://localhost:1111/student");
        setStudent(res.data);
    };

    const getCourses = async () => {
        const res = await axios.get("http://localhost:1111/course");
        setCourses(res.data);
    };

    const getDepartments = async () => {
        const res = await axios.get("http://localhost:1111/department");
        setDepartments(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            mobile,
            course_id: courseId,
            dept_id: deptId
        };

        if (editingId) {
            await axios.put(`http://localhost:1111/student/${editingId}`, payload);
            alert("Student Updated");
            setEditingId(null);
        } else {
            await axios.post("http://localhost:1111/student", payload);
            alert("Student Added");
        }

        setName("");
        setEmail("");
        setmobile("");
        setCourseId("");
        setDeptId("");

        getStudents();
    };

    const handledelete = async (_id) => {
        await axios.delete(`http://localhost:1111/student/${_id}`);
        getStudents();
    };

const handleUpdate = (rec) => {
  setName(rec.name);
  setEmail(rec.email);
  setmobile(rec.mobile);

  setCourseId(rec.course_id?.toString() || "");
  setDeptId(rec.dept_id?.toString() || "");

  setEditingId(rec._id);
};

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-10">

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white text-black p-10 rounded-2xl shadow-2xl w-full max-w-md mb-10"
            >
                <h2 className="text-3xl font-extrabold mb-8 text-center">
                    Student Form
                </h2>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-3 border rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-3 border rounded"
                />

                <input
                    type="tel"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                    className="w-full mb-4 p-3 border rounded"
                />

                {/* Course Dropdown */}
                <select
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full mb-4 p-3 border rounded"
                >
                    <option value="">Select Course</option>
                    {courses.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.course_name}
                        </option>
                    ))}
                </select>

                {/* Department Dropdown */}
                <select
                    value={deptId}
                    onChange={(e) => setDeptId(e.target.value)}
                    className="w-full mb-6 p-3 border rounded"
                >
                    <option value="">Select Department</option>
                    {departments.map((d) => (
                        <option key={d._id} value={d._id}>
                            {d.dept_name}
                        </option>
                    ))}
                </select>

                <button className="w-full py-3 bg-blue-500 text-white rounded">
                    {editingId ? "Update" : "Submit"}
                </button>
            </form>

            {/* TABLE */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-5xl">
                <table className="min-w-full border text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-black">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Course</th>
                            <th>Fees</th>
                            <th>Duration</th>
                            <th>Department</th>
                            <th>HOD</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((rec, idx) => (
                            <tr key={idx} className="text-black" >
                                <td>{rec.name}</td>
                                <td>{rec.email}</td>
                                <td>{rec.mobile}</td>
                                <td>{rec.course_name}</td>
                                <td>{rec.fees}</td>
                                <td>{rec.duration}</td>
                                <td>{rec.dept_name}</td>
                                <td>{rec.hod_name}</td>
                                <td className="flex gap-3 items-center justify-center text-center">
                                    <button
                                        onClick={() => handleUpdate(rec)}
                                        className="bg-yellow-400 px-2 py-1 rounded mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handledelete(rec._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}