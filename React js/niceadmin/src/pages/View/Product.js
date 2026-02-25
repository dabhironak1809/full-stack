import React, { useState, useEffect } from "react";
import api from "@/utilliy/api";
import axios from "axios";
import Link from "next/link";
import { headersApplication } from "@/utilliy/headers";

export default function Product() {
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const res = await api.get(`/user/all`, {
        headers: await headersApplication(),
      });
      setProfile(res?.data?.data);
      console.log("get data", res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

    const deletepro =async(id)=>{
    let confirm =window.confirm("are you sure?")
    if(confirm){
      const res=await api.delete(`/user/`+id,{
        headers:await headersApplication(),
      });
    alert(res?.data?.data);
    getProfile();
    }
  };

  return (
    <div className="mt-16">
      <div>
        <h1 className="text-xl text-blue-950 dark:text-sky-400">
          All User and Product
        </h1>
      </div>
      <form className="max-w-full bg-white rounded mt-4">
        <div className="flex justify-center p-4">
          <Link
            href={"/View/addmore2"}
            className="bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded-md text-lg text-white font-semibold"
          >
            Add Data
          </Link>
        </div>
        <hr className=" h-1 bg-red-500" />
        {Profile?.map((obj, key) => (
          <div key={key}>
            <div className="flex justify-between ">
              <h1 className="ml-2 mt-1 text-cyan-600">{++key}</h1>
              <div className="flex">
                <Link
                  href={`/View/addmore2?pro=${obj?.u_id}`}
                  
                  className="bg-green-400 hover:bg-green-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletepro(obj?.u_id)}
                  className="bg-red-400 hover:bg-red-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex justify-between p-4 -mt-2">
              <div className="flex gap-x-2">
                <h1>Name :</h1>
                <p value={obj?.u_id}>{obj?.u_name}</p>
              </div>
              <div className="flex gap-x-2">
                <h1>Mobile :</h1>
                <p value={obj?.u_id}>{obj?.u_mobile}</p>
              </div>
              <div className="flex gap-x-2">
                <h1>Email :</h1>
                <p value={obj?.u_id}>{obj?.u_email}</p>
              </div>
              <div className="flex gap-x-2">
                <h1>Entry Date :</h1>
                <p value={obj?.u_id}>{obj?.entry_date}</p>
              </div>
            </div>

            <hr className=" h-1 bg-red-500" />
          </div>
        ))}
      </form>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import api from "@/utilliy/api";
// import axios from "axios";
// import Link from "next/link";
// import { headersApplication } from "@/utilliy/headers";

// export default function Product() {
//   const [Profile, setProfile] = useState([]);

//   useEffect(() => {
//     getProfile();
//   }, []);

//   const getProfile = async () => {
//     try {
//       const res = await api.get(`/user`, {
//         headers: await headersApplication(),
//       });
//       setProfile(res?.data?.data);
//       console.log("get data", res?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="mt-16">
//       <div>
//         <h1 className="text-xl text-blue-950 dark:text-sky-400">
//           All User and Product
//         </h1>
//       </div>
//       <form className="max-w-full bg-white rounded mt-4">
//         <div className="flex justify-center p-4">
//           <Link
//             href={"/View/addmore"}
//             className="bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded-md text-lg text-white font-semibold"
//           >
//             Add Data
//           </Link>
//         </div>
//         <hr className=" h-1 bg-red-500" />
//         {/* Map through the data */}
//         {Profile?.user &&
//           Object.entries(Profile.user).map(([key, user]) => (
//             <div key={key}>
//               <div className="flex justify-between">
//                 <h1 className="ml-2 mt-1 text-cyan-600">{++key}</h1>
//                 <div className="flex">
//                   <Link
//                     href={`/View/addmore?pro=${user?.u_id || ""}`}
//                     className="bg-green-400 hover:bg-green-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
//                   >
//                     Edit
//                   </Link>
//                   <Link
//                     href={""}
//                     className="bg-red-400 hover:bg-red-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
//                   >
//                     Delete
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex justify-between p-4 -mt-2">
//                 <div className="flex gap-x-2">
//                   <h1>Name :</h1>
//                   <p>{user?.u_name || "N/A"}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1>Mobile :</h1>
//                   <p>{user?.u_mobile || "N/A"}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1>Email :</h1>
//                   <p>{user?.u_email || "N/A"}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1>Entry Date :</h1>
//                   <p>{user?.entry_date || "N/A"}</p>
//                 </div>
//               </div>
//               <hr className="mx-4 " />
//               {/* Map through projects */}
//               {Profile?.project?.map((project, index) => (
//                 <div className="flex justify-between p-4" key={index}>
//                   <div className="flex gap-x-2">
//                     <h1>Product Name :</h1>
//                     <p>{project?.p_name || "N/A"}</p>
//                   </div>
//                   <div className="flex gap-x-2">
//                     <h1>Product Detail :</h1>
//                     <p>{project?.p_detail || "N/A"}</p>
//                   </div>
//                   <div className="flex gap-x-2">
//                     <h1>No. Sales Person :</h1>
//                     <p>{project?.no_of_person || "N/A"}</p>
//                   </div>
//                 </div>
//               ))}
//               <hr className=" h-1 bg-red-500" />
//             </div>
//           ))}
//       </form>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import api from "@/utilliy/api";
// import axios from "axios";
// import Link from "next/link";
// import { headersApplication } from "@/utilliy/headers";

// export default function Product() {
//   const [Profile, setProfile] = useState(null);

//   useEffect(() => {
//     getProfile();
//   }, []);

//   const getProfile = async () => {
//     try {
//       const res = await api.get(`/user/all`, {
//         headers: await headersApplication(),
//       });
//       setProfile(res?.data?.data);
//       console.log("get data 11", res?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deletepro =async()=>{
//     let confirm =window.confirm("are you sure?")
//     if(confirm){
//       const res=await api.delete(`/user`,{
//         headers:await headersApplication(),
//       });
//     alert(res?.data?.data);
//     getProfile();

//     }
//   }

//   return (
//     <div className="mt-16">
//       <div>
//         <h1 className="text-xl text-blue-950 dark:text-sky-400">
//           All User and Product
//         </h1>
//       </div>
//       <form className="max-w-full bg-white rounded mt-4 dark:bg-gray-800">
//         <div className="flex justify-center p-4">
//           <Link
//             href={"/View/addmore2"}
//             className="bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded-md text-lg text-white font-semibold"
//           >
//             Add Data
//           </Link>
//         </div>
//         <hr className="h-1 bg-red-500" />

//         {Profile && (
//           <>
//             {/* User Information */}
//             <div>
//               <div className="flex justify-between">
//                 <h1 className="ml-2 mt-1 text-cyan-600">1</h1>
//                 <div className="flex">
//                   <Link
//                     href={`/View/addmore2?pro=${Profile[0]?.u_id}`}
//                     className="bg-green-400 hover:bg-green-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={()=>deletepro(Profile[0]?.u_id)}
//                     className="bg-red-400 hover:bg-red-600 hover:text-white px-2 py-1 mt-1 mr-2 rounded-md tracking-wide"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//               <div className="flex justify-between p-4 -mt-2">
//                 <div className="flex gap-x-2">
//                   <h1 className="">Name :</h1>
//                   <p className="">{Profile[0]?.u_name}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1 >Mobile :</h1>
//                   <p >{Profile[0]?.u_mobile}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1>Email :</h1>
//                   <p >{Profile[0]?.u_email}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1 >Entry Date :</h1>
//                   <p >{new Date(Profile[0]?.entry_date).toLocaleDateString()}</p>
//                 </div>
//               </div>
//               <hr className="mx-4" />
//             </div>

//             {/* Product Information */}
//             {Profile?.project?.map((product, index) => (
//               <div key={index} className="flex justify-between p-4">
//                 <div className="flex gap-x-2">
//                   <h1 >Product Name :</h1>
//                   <p >{product?.p_name || "N/A"}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1 >Product Detail :</h1>
//                   <p >{product?.p_detail || "N/A"}</p>
//                 </div>
//                 <div className="flex gap-x-2">
//                   <h1 >No. Sales Person :</h1>
//                   <p >{product?.no_of_person || "N/A"}</p>
//                 </div>
//               </div>
//             ))}
//             <hr className="h-1 bg-red-500" />
//           </>
//         )}
//       </form>
//     </div>
//   );
// }
