// import Link from "next/link";
// import React, { useEffect, useState , useContext, use } from "react";
// import api from "@/utilliy/api";
// import { headersApplication } from "../../utilliy/headers";
// import { useRouter } from 'next/router';
// import { counterContext } from "../context/context";

// export default function Profile() {
//       const router = useRouter();
//       const [Profile, setProfile] = useState([]);

//   useEffect(() => {
//     getProfile();
//   }, []);
//   const getProfile = async () => {
//     try {
//       // const res= await api.get("/profile/",{headers: await headersApplication()})
//       const res = await api.get(`/profile/`, {
//         headers: await headersApplication(),
//       });
//       setProfile(res?.data?.data);
//       console.log(res?.data?.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const counter = useContext(counterContext)

//   return (
//     <div className="mt-20">
//       <div>
//         <h1 className="text-xl text-blue-950 dark:text-sky-400">Profile</h1>
//       </div>
//       <form className="bg-white p-4 max-w-full rounded-md  dark:bg-gray-700">
//         <div className="flex justify-end">
//           <button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white ">Create PDF</button>
//         </div>
//         <div className="max-w-2xl mx-auto p-4">
//           <div className="space-y-4">
//             <div>
//               <img
//                 src={`http://192.168.0.103:4100/upload/${Profile.s_img}`}
//                 className="h-40 rounded-md"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300 tracking-wide">
//                 Name
//               </h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wide text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                 {Profile.s_name}
//               </p>
//             </div>

//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Mobile
//               </h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wider text-gray-900 dark:text-white">
//                 {Profile.s_mobile}
//               </p>
//             </div>

//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wider text-gray-900 dark:text-white">
//                 {Profile.s_email}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-4">
//           <Link href={'/View/EditProfile'} type='submit' className='tracking-wide bg-green-600 hover:bg-green-700 px-4 py-1 text-white rounded-md text-lg dark:bg-emerald-600'>Edit</Link>
//           {/* <Link
//             href={{
//               pathname: "/View/editProfile1",
//               query: {
//                 name: Profile.s_name,
//                 mobile: Profile.s_mobile,
//                 email: Profile.s_email,
//                 image: Profile.s_img,
//               },
//             }}
//             type="submit"
//             className="tracking-wide bg-green-600 px-4 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
//           >
//             Edit
//           </Link> */}
//           <div className="bg-gray-400 text-white px-4 py-2 rounded-md">{counter}</div>
//         </div>
//       </form>
//     </div>
//   );
// }

import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import api from "@/utilliy/api";
import { headersApplication } from "../../utilliy/headers";
import { useRouter } from "next/router";
import { counterContext } from "../context/context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Profile() {
  const router = useRouter();
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await api.get(`/profile/`, {
        headers: await headersApplication(),
      });
      setProfile(res?.data?.data);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const counter = useContext(counterContext);

  // const generatePDF = async () => {
  //   const input = document.getElementById("profile-content");
  //   const canvas = await html2canvas(input, {
  //     scale: 4, // Increase quality
  //   });

  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const imgWidth = 190; // PDF width (adjust as needed)
  //   const pageHeight = pdf.internal.pageSize.height;
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //   let position = 10; // Start position
  //   pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

  //   // Handle multi-page PDFs
  //   while (position + imgHeight > pageHeight) {
  //     position -= pageHeight;
  //     pdf.addPage();
  //     pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  //   }

  //   pdf.save("profile.pdf");
  // };

  const generatePDF = async () => {
    const input = document.getElementById("profile-content");
    
    const canvas = await html2canvas(input, {
      scale: 4, // Increase quality
      useCORS: true, // Enable CORS
      allowTaint: false, // Ensure no tainted canvases are used
    });
  
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // PDF width (adjust as needed)
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
    let position = 10; // Start position
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  
    // Handle multi-page PDFs
    if (imgHeight > pageHeight) {
      let pageNumber = 1;
      while (position + imgHeight > pageNumber * pageHeight) {
        pdf.addPage();
        pageNumber++;
        pdf.addImage(imgData, "PNG", 10, -pageNumber * pageHeight + position + imgHeight, imgWidth, imgHeight);
      }
    }
  
    pdf.save("profile.pdf");
  };
  

  return (
    <div className="mt-20">
      <div>
        <h1 className="text-xl text-blue-950 dark:text-sky-400">Profile</h1>
      </div>
      <form id="profile-content" className="bg-white p-4 max-w-full rounded-md dark:bg-gray-700">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={generatePDF}
            className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-blue-500"
          >
            Create PDF
          </button>
        </div>
        <div className="max-w-2xl mx-auto p-4">
          <div className="space-y-4">
            <div>
              <img
                src={`http://192.168.0.103:4100/upload/${Profile.s_img}`}
                className="h-40 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <h1 className="text-sm md:text-base dark:text-lime-300 tracking-wide">Name</h1>
              <p className="font-semibold">:</p>
              <p className="tracking-wide text-gray-900 dark:text-white">
                {Profile.s_name}
              </p>
            </div>

            <div className="flex space-x-4">
              <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
              <p className="font-semibold">:</p>
              <p className="tracking-wider text-gray-900 dark:text-white">
                {Profile.s_mobile}
              </p>
            </div>

            <div className="flex space-x-4">
              <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
              <p className="font-semibold">:</p>
              <p className="tracking-wider text-gray-900 dark:text-white">
                {Profile.s_email}
              </p>
            </div>
          </div>
          <h2 className={`${rajdhani.className} text-gray-800 font-semibold text-4xl mt-4`}>
          Solar energy's exceptional synergies
</h2>
<p className={`${rajdhani.className} text-3xl font-bold mt-2`}>
123456
  <span className="text-gray-500 ml-4 text-sm font-normal">/Month</span>
</p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href={"/View/EditProfile"}
            type="submit"
            className="tracking-wide bg-green-600 hover:bg-green-700 px-4 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
          >
            Edit
          </Link>
          <div className="bg-gray-400 text-white px-4 py-2 rounded-md">{counter}</div>
        </div>
      </form>
    </div>
  );
}

// import Link from "next/link";
// import React, { useEffect, useState, useContext } from "react";
// import api from "@/utilliy/api";
// import { headersApplication } from "../../utilliy/headers";
// import { useRouter } from "next/router";
// import { counterContext } from "../context/context";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// export default function Profile() {
//   const router = useRouter();
//   const [Profile, setProfile] = useState([]);
//   const toBase64 = async (url) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };
//   useEffect(() => {
//     getProfile();
//   }, []);

//   // const getProfile = async () => {
//   //   try {
//   //     const res = await api.get(`/profile/`, {
//   //       headers: await headersApplication(),
//   //     });
//   //     setProfile(res?.data?.data);
//   //     console.log(res?.data?.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const getProfile = async () => {
//     try {
//       const res = await api.get(`/profile/`, {
//         headers: await headersApplication(),
//       });
//       const profileData = res?.data?.data;
  
//       // Convert image URL to Base64
//       profileData.s_img = await toBase64(`http://192.168.0.103:4100/upload/${profileData.s_img}`);
  
//       setProfile(profileData);
//       console.log(profileData);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
    

//   const counter = useContext(counterContext);

//   // const generatePDF = async () => {
//   //   const input = document.getElementById("profile-content");
//   //   const canvas = await html2canvas(input, {
//   //     scale: 4, // Increase quality
//   //   });

//   //   const imgData = canvas.toDataURL("image/png");
//   //   const pdf = new jsPDF("p", "mm", "a4");
//   //   const imgWidth = 190; // PDF width (adjust as needed)
//   //   const pageHeight = pdf.internal.pageSize.height;
//   //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   //   let position = 10; // Start position
//   //   pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

//   //   // Handle multi-page PDFs
//   //   while (position + imgHeight > pageHeight) {
//   //     position -= pageHeight;
//   //     pdf.addPage();
//   //     pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
//   //   }

//   //   pdf.save("profile.pdf");
//   // };
//   const generatePDF = async () => {
//     const input = document.getElementById("profile-content");
//     const canvas = await html2canvas(input, {
//       scale: 4, // Increase quality
//       useCORS: true, // Enable cross-origin images
//     });
  
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgWidth = 190; // PDF width (adjust as needed)
//     const pageHeight = pdf.internal.pageSize.height;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
//     let position = 10; // Start position
//     pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  
//     // Handle multi-page PDFs
//     while (position + imgHeight > pageHeight) {
//       position -= pageHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
//     }
  
//     pdf.save("profile.pdf");
//   };
  
//   return (
//     <div className="mt-20">
//       <div>
//         <h1 className="text-xl text-blue-950 dark:text-sky-400">Profile</h1>
//       </div>
//       <form
//         id="profile-content"
//         className="bg-white p-4 max-w-full rounded-md dark:bg-gray-700"
//       >
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={generatePDF}
//             className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-blue-500"
//           >
//             Create PDF
//           </button>
//         </div>
//         <div className="max-w-2xl mx-auto p-4">
//           <div className="space-y-4">
//             <div>
//               <img
//                 src={`http://192.168.0.103:4100/upload/${Profile.s_img}`}
//                 className="h-40 rounded-md"
//               />
//               {/* <img
//                 src={`http://192.168.0.103:4100/upload/${Profile.s_img}`}
//                 className="h-40 rounded-md"
//                 crossOrigin="anonymous"
//               /> */}
//             </div>
//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300 tracking-wide">
//                 Name
//               </h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wide text-gray-900 dark:text-white">
//                 {Profile.s_name}
//               </p>
//             </div>

//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Mobile
//               </h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wider text-gray-900 dark:text-white">
//                 {Profile.s_mobile}
//               </p>
//             </div>

//             <div className="flex space-x-4">
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <p className="font-semibold">:</p>
//               <p className="tracking-wider text-gray-900 dark:text-white">
//                 {Profile.s_email}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-4">
//           <Link
//             href={"/View/EditProfile"}
//             type="submit"
//             className="tracking-wide bg-green-600 hover:bg-green-700 px-4 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
//           >
//             Edit
//           </Link>
//           <div className="bg-gray-400 text-white px-4 py-2 rounded-md">
//             {counter}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

/* <div>
                        <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='Enter Your Password'></input>
                    </div> */
