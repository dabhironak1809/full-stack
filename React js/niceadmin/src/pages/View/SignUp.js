// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import api from "@/utilliy/api";
// import { useRouter } from "next/router";

// export default function SignUp() {
//   const router = useRouter();


//   const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       mobile: "",
//       email: "",
//       password: "",
//       image: null,
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Minimum 3 latter required")
//         .required("Name is required"),
//       mobile: Yup.string()
//         .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//         .required("Mobile number is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string()
//         .matches(passwordRules, {
//           message: "Please create a stronger password",
//         })
//         .required("Password is required"),
//       image: Yup.mixed().required("Image upload is required"),
//     }),
//     // onSubmit: (values) => {
//     //   console.log('Form Submitted', values);
//     // },
    
//     onSubmit: async () => {
//       const { name, mobile, email, password, image } = formik?.values;
//       const encodedPassword = btoa(password);
//       const formData = new FormData();
//       formData.append("s_name", name);
//       formData.append("s_mobile", mobile);
//       formData.append("s_email", email);
//       formData.append("s_password", encodedPassword);
//       formData.append("s_img", image);

//       let res;
//       try {
//         res = await api.post("/signup", formData);
//         console.log(res);
//         if (res?.status === 200) {
//           alert(res?.data?.data);
//           router.push("/");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });
  

//   return (
//     <div className="mt-20">
//       <form
//         onSubmit={formik.handleSubmit}
//         className="bg-white p-4 max-w-5xl mx-auto rounded-lg dark:bg-gray-700"
//       >
//         <div>
//           <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
//             Sign Up Page
//           </h1>
//         </div>
//         <div className="pt-4 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
//               <input
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter Your Name"
//                 className={`bg-gray-50 border ${
//                   formik.errors.name && formik.touched.name
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <p className="text-red-500 text-sm">{formik.errors.name}</p>
//               )}
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Mobile
//               </h1>
//               <input
//                 name="mobile"
//                 value={formik.values.mobile}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter Your Mobile"
//                 className={`bg-gray-50 border ${
//                   formik.errors.mobile && formik.touched.mobile
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.mobile && formik.errors.mobile && (
//                 <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <input
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter Your Email"
//                 className={`bg-gray-50 border ${
//                   formik.errors.email && formik.touched.email
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-red-500 text-sm">{formik.errors.email}</p>
//               )}
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Password
//               </h1>
//               <input
//                 name="password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter Your Password"
//                 className={`bg-gray-50 border ${
//                   formik.errors.password && formik.touched.password
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <p className="text-red-500 text-sm">{formik.errors.password}</p>
//               )}
//             </div>
//           </div>

//           <div className="mb-5">
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-300">
//               Upload Image
//             </label>
            
//             <input
//               type="file"
//               name="image"
//               onChange={(event) =>
//                 formik.setFieldValue("image", event.currentTarget.files[0])
//               }
//               onBlur={formik.handleBlur}
//               className={`bg-gray-50 border ${
//                 formik.errors.image && formik.touched.image
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600`}
//             />
//             {formik.touched.image && formik.errors.image && (
//               <p className="text-red-500 text-sm">{formik.errors.image}</p>
//             )}
//           </div>


//           <div>
//             <Link
//               href={"/View/SignIn"}
//               className="dark:text-lime-300 px-4 py-2 text-xs sm:text-base border border-blue-700 hover:border-blue-600 rounded-lg hover:bg-gray-700 hover:text-white"
//             >
//               I Have Already Signed Up
//             </Link>
//           </div>
//           <div className="flex justify-center space-x-2">
//             <button
//               type="submit"
//               className="bg-[#0d6efd] hover:bg-blue-700 px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               onClick={formik.handleReset}
//               className="bg-[#6c757d] hover:bg-gray-700 px-3 py-1 text-white rounded-md text-lg dark:bg-red-700"
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// // import React from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';

// // const validateNumberInput = (value) => {
// //   let error;
// //   if (!/^\d+$/.test(value)) {
// //     error = 'Only numbers are allowed';
// //   }
// //   return error;
// // };

// // const MyForm = () => {
// //   return (
// //     <Formik
// //       initialValues={{ numberInput: '' }}
// //       onSubmit={(values) => {
// //         console.log(values);
// //       }}
// //     >
// //       {() => (
// //         <Form>
// //           <div>
// //             <label htmlFor="numberInput">Number Input</label>
// //             <Field
// //               name="numberInput"
// //               validate={validateNumberInput}
// //             />
// //             <ErrorMessage name="numberInput" component="div" />
// //           </div>
// //           <button type="submit">Submit</button>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // };

// // export default MyForm;


import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "@/utilliy/api";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null); 

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 letters required")
        .required("Name is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .matches(passwordRules, {
          message: "Please create a stronger password",
        })
        .required("Password is required"),
      image: Yup.mixed().required("Image upload is required"),
    }),
    onSubmit: async () => {
      const { name, mobile, email, password, image } = formik.values;
      const encodedPassword = btoa(password);
      const formData = new FormData();
      formData.append("s_name", name);
      formData.append("s_mobile", mobile);
      formData.append("s_email", email);
      formData.append("s_password", encodedPassword);
      formData.append("s_img", image);

      try {
        const res = await api.post("/signup", formData);
        console.log(res);
        if (res?.status === 200) {
          alert(res?.data?.data);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result); // Set the preview
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-20 ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 max-w-5xl mx-auto rounded-lg dark:bg-gray-700"
      >
        <div>
          <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
            Sign Up Page
          </h1>
        </div>
        <div className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
              <input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Your Name"
                className={`bg-gray-50 border ${
                  formik.errors.name && formik.touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">
                Mobile
              </h1>
              {/* <input
                name="mobile"
                type="number"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Your Mobile"
                className={`bg-gray-50 border ${
                  formik.errors.mobile && formik.touched.mobile
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
              /> */}
              <input
                name="mobile"
                value={formik.values.mobile}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
                  formik.setFieldValue('mobile', numericValue); // Set only numeric value
                }}
                onBlur={formik.handleBlur}
                maxLength={10} // Restrict length to 10 digits
                placeholder="Enter Your Mobile"
                className={`bg-gray-50 border ${
                  formik.errors.mobile && formik.touched.mobile ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
              />

              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
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
                } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
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
                } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-300">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
              className={`bg-gray-50 border ${
                formik.errors.image && formik.touched.image
                ? "border-red-500"
                : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
              />
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm">{formik.errors.image}</p>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="my-4 w-40 h-40 object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex space-x-2">
            
            <Link
              href={"/"}
              className="px-4 py-2 bg-slate-700 text-white hover:text-cyan-400 border border-blue-700 dark:text-lime-300 dark:hover:text-lime-500 text-xs sm:text-base rounded-lg"
            >
              I have olredy sign up
            </Link>
          </div>
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
    </div>
  );
}
