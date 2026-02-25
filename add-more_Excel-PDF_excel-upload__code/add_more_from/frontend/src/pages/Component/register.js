// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex justify-center items-center p-6">
//       <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow-2xl">

//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Registration Form
//         </h2>

//         {/* First Row */}
//         <div className="mb-6 p-6 bg-gray-50 rounded-2xl shadow-inner">
//           <div className="grid md:grid-cols-3 gap-4">

//             <div>
//               <label className="text-sm text-gray-600">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Mobile</label>
//               <input
//                 type="tel"
//                 placeholder="Enter mobile"
//                 className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             type="button"
//             className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
//           >
//             + Add More
//           </button>

//           <button
//             type="submit"
//             className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/router";

export default function Home() {
  const [formData, setFormData] = useState([
    { name: "", email: "", mobile: "" }
  ]);

  const router = useRouter();

  // Handle change
  const handleChange = (index, e) => {
    const values = [...formData];
    values[index][e.target.name] = e.target.value;
    setFormData(values);
  };

  // Add more row
  const handleAddMore = () => {
    setFormData([...formData, { name: "", email: "", mobile: "" }]);
  };

  // Remove row
  const handleRemove = (index) => {
    const values = [...formData];
    values.splice(index, 1);
    setFormData(values);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:1111/register", formData)
      alert("data store succesfully");
      setFormData([{ name: "", email: "", mobile: "" }])
      // router.push("Display")
      router.push("/Component/Display")
    } catch (error) {
      console.error(error);
      alert("error storing data")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black w-full max-w-3xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Registration Form
        </h2>

        {formData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-4 gap-4 mb-4 items-center" >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleChange(index, e)}
              className="p-2 border rounded"
              required  />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={item.email}
              onChange={(e) => handleChange(index, e)}
              className="p-2 border rounded"
              required   />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={item.mobile}
              onChange={(e) => handleChange(index, e)}
              className="p-2 border rounded"
              required  />

            <div className="flex gap-2">
              {formData.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded" >
                  Delete
                </button>
              )}

              {index === formData.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddMore}
                  className="bg-blue-500 text-white px-2 py-1 rounded"  >
                  Add More
                </button>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded mt-4" 
        >
          Submit
        </button>
      </form>
    </div>
  );
}