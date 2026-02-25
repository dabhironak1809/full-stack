// import React from 'react'
// import Link from 'next/link'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export default function SignIn() {

//     const formik = useFormik({
//         initialValues: {

//           mobile: '',
//           password: '',

//         },
//         validationSchema: Yup.object({
//           mobile: Yup.string()
//             .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
//             .required('Mobile number is required'),
//           password: Yup.string()
//             .required('Password is required'),
//         }),
//         onSubmit: (values) => {
//           console.log('Form Submitted', values);
//         },
//       });

//   return (
//     <div className='mt-20'>
//       <form className='bg-white p-4 max-w-full mx-auto dark:bg-gray-700 '>
//         <div>
//             <h1 className='text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300'>Sign In Page</h1>
//         </div>
//         <div className='pt-4 space-y-4 max-w-2xl mx-auto'>

//                 {/* <div>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>Mobile</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                            placeholder='Enter Your Mobile'></input>
//                 </div> */}

//                 {/* <div>
//                     <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
//                     <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                            placeholder='Enter Your Password'></input>
//                 </div> */}

//             <div>
//               <h1 className='text-sm md:text-base dark:text-lime-300'>Mobile</h1>
//               <input
//                 name="mobile"
//                 value={formik.values.mobile}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder='Enter Your Mobile'
//                 className={`bg-gray-50 border ${formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.mobile && formik.errors.mobile && (
//                 <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
//               )}
//             </div>

//             <div>
//               <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
//               <input
//                 name="password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder='Enter Your Password'
//                 className={`bg-gray-50 border ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <p className="text-red-500 text-sm">{formik.errors.password}</p>
//               )}
//             </div>

//             <div>
//                 <Link href={"/View/SignUp"}
//                       className=' dark:text-lime-300 px-4 py-2 text-xs sm:text-base border border-blue-700  hover:border-blue-600 rounded-lg hover:bg-gray-700 hover:text-white'>
//                 I Could Not Sign In
//                 </Link>
//             </div>
//             <div className='flex justify-center space-x-2'>
//                 <Link href={""} className='bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600'>Submit</Link>
//                 <Link href={""} className='bg-[#6c757d] px-3 py-1 text-white rounded-md text-lg dark:bg-red-700'>Reset</Link>
//             </div>
//         </div>
//       </form>
//     </div>
//   )
// }
// onSubmit: (values) => {
//   console.log('Form Submitted', values);
//   // Display success toast notification
//   toast.success("Form Submitted Successfully!");
// },

// onSubmit:async()=>{
//   const{email,password}=formik?.values;
//   // const encodedPassword = btoa(password);

//   let res
//   try {
//      res = await api.get(`/login/?s_email=${email}&s_password=${password}`);
//     console.log(api);
//     if (res?.status === 200) {
//       console.log(res?.data);
//       const SId = res?.data;
//         console.log(SId);
//         localStorage.setItem("inputValue",SId)
//     }
//   } catch (error) {
//     console.log(error);
//   }
// },

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/utilliy/api";
import { useRouter } from "next/router";
import { headersApplication } from "@/utilliy/headers";

export default function SignIn() {
  const router = useRouter();
  const data = useRef();
  const [message, setErrors] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    // onSubmit: async () => {
    //   const { email, password } = formik?.values;
    //   const encodedPassword = btoa(password);

    //   try {
    //     // const res = await api.get(`/login/?s_email=${email}&s_password=${encodedPassword}`);
    //     const res = await api.get(
    //       `/login/?s_email=${email}&s_password=${encodedPassword}`,
    //       {
    //         headers: await headersApplication(),
    //       }
    //     );

    //     if (res?.status === 200) {
    //       console.log(res?.data);
    //       router.push("/View/Dashbord");
    //       // window.location.reload();
    //       router.reload();
    //       const token = res?.data?.token;
    //       if (token) {
    //         // localStorage.setItem("authToken", token);
    //         localStorage.setItem("token", token);
    //         // toast.success("Token stored successfully!");
    //       } else {
    //         toast.error("Token not found in response.");
    //       }
    //     }
    //   } catch (error) {
    //     // console.error("Error during login:", error);
    //     // toast.error("Failed to login.");
    //     if (error.response) {
    //       // Backend error with status and message
    //       setErrors(
    //         error.response.data.message || "An error occurred during login."
    //       );
    //       // toast.error(`Error: ${message}`);
    //     } else {
    //       // General error
    //       toast.error("Failed to login. Please check your connection.");
    //     }
    //   }
    // },
  
    onSubmit: async () => {
      const { email, password } = formik?.values;
      const encodedPassword = btoa(password);
    
      try {
        const res = await api.get(
          `/login/?s_email=${email}&s_password=${encodedPassword}`,
          {
            headers: await headersApplication(),
          }
        );
    
        if (res?.status === 200) {
          console.log(res?.data);
          router.push("/");
          
          // Add 1-second delay before reloading the router
          setTimeout(() => {
            router.reload();
          }, 1000);
          
          const token = res?.data?.token;
          if (token) {
            localStorage.setItem("token", token);
          } else {
            toast.error("Token not found in response.");
          }
        }
      } catch (error) {
        if (error.response) {
          setErrors(
            error.response.data.message || "An error occurred during login."
          );
        } else {
          toast.error("Failed to login. Please check your connection.");
        }
      }
    }
    
  
  });

  return (
    <div className="mt-20">
      <form
        className="bg-white p-4 max-w-3xl mx-auto rounded-lg dark:bg-gray-700"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
            Sign In Page
          </h1>
        </div>
        <div className="pt-4 space-y-4 max-w-2xl mx-auto">
          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">
              Email / Mobile
            </h1>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Email"
              className={`bg-gray-50 border ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">
              Password
            </h1>
            <input
              name="password"
              type="password"
              value={formik.values.password} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Password"
              className={`bg-gray-50 border ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <div className="flex space-x-2">
            <p>Already have an account?</p>
            <Link
              href={"/View/SignUp"}
              className="hover:underline dark:text-lime-300 dark:hover:text-lime-500 text-xs sm:text-base text-blue-600 hover:text-blue-800 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
          <p className="text-sm text-red-600 text-center tracking-wide">
            {message}
          </p>
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="bg-[#0d6efd] hover:bg-blue-700 px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
            >
              Submit
            </button>
            <button
              type="reset"
              onClick={formik.handleReset}
              className="bg-[#6c757d] hover:bg-gray-700 px-3 py-1 text-white rounded-md text-lg dark:bg-red-700"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

// import React, { useRef } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from "@/utilliy/api";
// import { useRouter } from "next/router";
// import { headersApplication } from "@/utilliy/headers";

// export default function SignIn() {
//   const router = useRouter();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().required("Email is required"),
//       password: Yup.string().required("Password is required"),
//     }),
//     onSubmit: async () => {
//       const { email, password } = formik.values;
//       const encodedPassword = btoa(password);

//       try {
//         const res = await api.get(`/login/?s_email=${email}&s_password=${encodedPassword}`, {
//           headers: await headersApplication(),
//         });

//         if (res?.status === 200) {
//           const token = res?.data?.token;
//           if (token) {
//             localStorage.setItem("token", token);
//             toast.success("Login successful!");
//             router.reload("/");
//           } else {
//             toast.error("Token not found in response.");
//           }
//         }
//       } catch (error) {
//         if (error.response) {
//           // Backend error with status and message
//           const message = error.response.data.message || "An error occurred during login.";
//           toast.error(`Error: ${message}`);
//         } else {
//           // General error
//           toast.error("Failed to login. Please check your connection.");
//         }
//       }
//     },
//   });

//   return (
//     <div className="mt-20">
//       <form
//         className="bg-white p-4 max-w-3xl mx-auto rounded-lg dark:bg-gray-700"
//         onSubmit={formik.handleSubmit}
//       >
//         <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">Sign In Page</h1>
//         <div className="pt-4 space-y-4 max-w-2xl mx-auto">
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//             <input
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Your Email"
//               className={`bg-gray-50 border ${
//                 formik.errors.email && formik.touched.email ? "border-red-500" : "border-gray-300"
//               } text-gray-900 rounded-lg block w-full p-2 md:p-2.5`}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="text-red-500 text-sm">{formik.errors.email}</p>
//             )}
//           </div>
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Password</h1>
//             <input
//               name="password"
//               type="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Your Password"
//               className={`bg-gray-50 border ${
//                 formik.errors.password && formik.touched.password ? "border-red-500" : "border-gray-300"
//               } text-gray-900 rounded-lg block w-full p-2 md:p-2.5`}
//             />
//             {formik.touched.password && formik.errors.password && (
//               <p className="text-red-500 text-sm">{formik.errors.password}</p>
//             )}
//           </div>
//           <div className="flex space-x-2">
//             <p>Don't have an account?</p>
//             <Link
//               href={"/View/SignUp"}
//               className="hover:underline text-blue-600 hover:text-blue-800 dark:text-lime-300 dark:hover:text-lime-500"
//             >
//               Sign Up
//             </Link>
//           </div>
//           <div className="flex justify-center space-x-2">
//             <button type="submit" className="bg-[#0d6efd] px-3 py-1 text-white rounded-md">
//               Submit
//             </button>
//             <button type="reset" className="bg-[#6c757d] px-3 py-1 text-white rounded-md">
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }
