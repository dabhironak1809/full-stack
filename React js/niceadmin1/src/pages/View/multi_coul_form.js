// import React, { useContext } from 'react'
// import Link from 'next/link'
// import jsPDF from 'jspdf'
// import { counterContext } from '../context/context'
// import html2canvas from "html2canvas";



// export default function multi_coul_form() {

//     const counter = useContext(counterContext)

//     // const createpdf = async()=>{
//     //     const input = document.getElementById("profile-content");
//     //     const pdf =new jsPDF("p","mm","a4");
//     //     const pageHeight = pdf.internal.pageSize.height;

        
//     //     while(position > pageHeight){
//     //         position-=pageHeight;
//     //         pdf.addPage();
//     //     }
//     //     pdf.save("multi_coul_form");
//     // };

// const createpdf = async () => {
//   const input = document.getElementById("profile-content"); // Make sure the form has this ID
//   if (!input) {
//     console.error("Element with ID 'profile-content' not found");
//     return;
//   }

//   // Use html2canvas to capture the content as an image
//   const canvas = await html2canvas(input, { scale: 2, useCORS: true });
//   const imgData = canvas.toDataURL("image/png");

//   // Create a new PDF document
//   const pdf = new jsPDF("p", "mm", "a4");
//   const imgWidth = 190; // Adjust for A4 width
//   const pageHeight = pdf.internal.pageSize.height;
//   const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

//   let position = 10; // Initial position for the content
//   pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

//   // Handle multi-page content if it overflows the page height
//   while (position + imgHeight > pageHeight) {
//     position -= pageHeight;
//     pdf.addPage();
//     pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
//   }

//   // Save the PDF
//   pdf.save("multi_column_form.pdf");
// };


//   return (
//     <div className='mt-20'>
//       {/* <form className='bg-white p-4 max-w-full mx-auto dark:bg-gray-700'>  */}
//       <form id="profile-content" className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700">

//         <div className='flex justify-between'>
//             <h1 className='text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300'>Multi Columns Form</h1>
//             <button onClick={createpdf} className='px-2 py-1 bg-red-300 hover:bg-red-400 rounded'>PDF</button>
//         </div>
//         <div className='pt-4 space-y-4'>
//             <div>
//                 <h1 className='text-sm md:text-base dark:text-lime-300'>Your Name</h1>
//                 <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4'>
//                 <div>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>Email</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
//                 </div>
//                 <div>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
//                 </div>
//             </div>
//             <div>
//                 <h1 className='text-sm md:text-base dark:text-lime-300'>Address</h1>
//                 <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1234 Main St'></input>
//             </div>
//             <div>
//                 <h1 className='text-sm md:text-base dark:text-lime-300'>Address 2</h1>
//                 <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Apartment, studio, or floor'></input>
//             </div>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-4'>
//                 <div className='md:col-span-3'>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>City</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
//                 </div>
//                 <div className='md:col-span-2'>
//                 <h1 className='text-sm md:text-base dark:text-lime-300'>State</h1>
//                     <select name="select" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                         <option value="Choose..." >Choose...</option>
//                         <option value="...">...</option>
//                     </select>          
//                 </div>
//                 <div className='sm:col-span-2 md:col-span-1'>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>Zip</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
//                 </div>
//             </div>
//             <div>
//                 <label className='dark:text-lime-300'>
//                 <input type='checkbox' className='mr-2'/>
//                 Check me out
//                 </label>
//             </div>
//             <div className='flex justify-center space-x-2'>
//                 <Link href={""} className='bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600'>Submit</Link>
//                 <Link href={""} className='bg-[#6c757d] px-3 py-1 text-white rounded-md text-lg dark:bg-red-700'>Reset</Link>
//             </div>
//             <div className="bg-gray-400 text-white px-4 py-2 rounded-md">{counter}</div>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useContext } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { counterContext } from "../context/context";

export default function MultiColumnForm() {
  const counter = useContext(counterContext);

  const createpdf = async () => {
    const input = document.getElementById("profile-content");

    if (!input) {
      console.error("Element with ID 'profile-content' not found");
      return;
    }

    try {
      const canvas = await html2canvas(input, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // A4 width
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 10;
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

      while (position + imgHeight > pageHeight) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      }

      pdf.save("multi_column_form.pdf");
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  return (
    <div className="mt-20">
      <form id="profile-content" className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700">
        <div className="flex justify-between">
          <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
            Multi Columns Form
          </h1>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              createpdf();
            }}
            className="px-2 py-1 bg-red-300 hover:bg-red-400 rounded"
          >
            PDF
          </button>
        </div>
        {/* Form content */}
        
          <div className='pt-4 space-y-4'>
             <div>
                 <h1 className='text-sm md:text-base dark:text-lime-300'>Your Name</h1>
                 <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4'>
                 <div>
                     <h1 className='text-sm md:text-base dark:text-lime-300'>Email</h1>
                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 </div>
                 <div>
                     <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 </div>
             </div>
             <div>
                 <h1 className='text-sm md:text-base dark:text-lime-300'>Address</h1>
                 <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1234 Main St'></input>
             </div>
             <div>
                 <h1 className='text-sm md:text-base dark:text-lime-300'>Address 2</h1>
                 <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Apartment, studio, or floor'></input>
             </div>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-4'>
                 <div className='md:col-span-3'>
                     <h1 className='text-sm md:text-base dark:text-lime-300'>City</h1>
                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 </div>
                 <div className='md:col-span-2'>
                 <h1 className='text-sm md:text-base dark:text-lime-300'>State</h1>
                     <select name="select" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="Choose..." >Choose...</option>
                         <option value="...">...</option>
                     </select>          
                 </div>
                 <div className='sm:col-span-2 md:col-span-1'>
                     <h1 className='text-sm md:text-base dark:text-lime-300'>Zip</h1>
                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 </div>
             </div>
             <div>
                 <label className='dark:text-lime-300'>
                 <input type='checkbox' className='mr-2'/>
                 Check me out
                 </label>
             </div>
             <div className='flex justify-center space-x-2'>
                 <Link href={""} className='bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600'>Submit</Link>
                 <Link href={""} className='bg-[#6c757d] px-3 py-1 text-white rounded-md text-lg dark:bg-red-700'>Reset</Link>
             </div>
             
         </div>
        
      </form>
    </div>
  );
}

// import React, { useContext } from "react";
// import Link from "next/link";
// import { counterContext } from "../context/context";
// import html2pdf from "html2pdf.js";

// export default function MultiColumnForm() {
//   const counter = useContext(counterContext);

//   const createpdf = () => {
//     const input = document.getElementById("profile-content");

//     if (!input) {
//       console.error("Element with ID 'profile-content' not found");
//       return;
//     }

//     const options = {
//       margin: 1,
//       filename: "multi_column_form.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//     };

//     // Generate PDF
//     html2pdf().set(options).from(input).save();
//   };

//   return (
//     <div className="mt-20">
//       <form
//         id="profile-content"
//         className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700"
//       >
//         <div className="flex justify-between">
//           <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
//             Multi Columns Form
//           </h1>
//           <button
//             type="button"
//             onClick={(e) => {
//               e.preventDefault();
//               createpdf();
//             }}
//             className="px-2 py-1 bg-red-300 hover:bg-red-400 rounded"
//           >
//             PDF
//           </button>
//         </div>
//         {/* Form content */}
//         <div className="pt-4 space-y-4">
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">
//               Your Name
//             </h1>
//             <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Password
//               </h1>
//               <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             </div>
//           </div>
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Address</h1>
//             <input
//               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="1234 Main St"
//             />
//           </div>
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">
//               Address 2
//             </h1>
//             <input
//               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Apartment, studio, or floor"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-4">
//             <div className="md:col-span-3">
//               <h1 className="text-sm md:text-base dark:text-lime-300">City</h1>
//               <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             </div>
//             <div className="md:col-span-2">
//               <h1 className="text-sm md:text-base dark:text-lime-300">State</h1>
//               <select
//                 name="select"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option value="Choose...">Choose...</option>
//                 <option value="...">...</option>
//               </select>
//             </div>
//             <div className="sm:col-span-2 md:col-span-1">
//               <h1 className="text-sm md:text-base dark:text-lime-300">Zip</h1>
//               <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             </div>
//           </div>
//           <div>
//             <label className="dark:text-lime-300">
//               <input type="checkbox" className="mr-2" />
//               Check me out
//             </label>
//           </div>
//           <div className="flex justify-center space-x-2">
//             <Link
//               href={""}
//               className="bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
//             >
//               Submit
//             </Link>
//             <Link
//               href={""}
//               className="bg-[#6c757d] px-3 py-1 text-white rounded-md text-lg dark:bg-red-700"
//             >
//               Reset
//             </Link>
//           </div>
//           <div className="bg-gray-400 text-white px-4 py-2 rounded-md">
//             {counter}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

