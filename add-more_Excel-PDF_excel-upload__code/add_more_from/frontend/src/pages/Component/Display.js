// "use client"

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Display() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get("http://localhost:1111/register")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Register Data</h2>

//       <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.mobile}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:1111/register")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handledelete = async (id) => {
    const confirmdelete = window.confirm("are you sure delete this")
    if (confirmdelete) {
      try {
        const res = await axios.delete(`http://localhost:1111/register/${id}`)
        fetchData();
      }catch(error){
        console.error(error)
      }
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-10">

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          📋 Register Data List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 rounded-tl-xl">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Mobile</th>
                <th className="p-3 rounded-tr-xl">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-indigo-50 transition duration-200`}
                  >
                    <td className="p-3 font-semibold text-gray-700">
                      {item.id}
                    </td>
                    <td className="p-3 text-black">{item.name}</td>
                    <td className="p-3 text-blue-600">{item.email}</td>
                    <td className="p-3 text-black">{item.mobile}</td>
                    <td className="p-3">
                      <div className="flex gap-3">

                        <button className="px-4 py-1.5 bg-yellow-500 text-white rounded-lg  hover:bg-yellow-600 transition duration-200  shadow-md text-sm font-medium" >
                          Update
                        </button>

                        <button onClick={() => handledelete(item.id)} className="px-4 py-1.5 bg-red-500 text-white rounded-lg  hover:bg-red-600 transition duration-200  shadow-md text-sm font-medium" >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))

              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-5 text-gray-500"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}