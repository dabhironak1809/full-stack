// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import api from "@/utilliy/api";
// import { headersApplication } from "../../utilliy/headers";

// export default function EditProfile() {

//   const [Profile, setProfile] = useState([]);

//   useEffect(() => {
//     getProfile();
//   }, []);
//   const getProfile = async () => {
//     try {
//       const res = await api.get(`/profile/`, {
//         headers: await headersApplication(),
//       });
//       setProfile(res?.data?.data);
//       console.log(res?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       mobile: "",
//       email: "",
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
//       image: Yup.mixed().required("Image upload is required"),
//     }),
//     // onSubmit: (values) => {
//     //   console.log('Form Submitted', values);
//     // },

//     onSubmit: async () => {
//       const { name, mobile, email, image } = formik?.values;

//       const formData = new FormData();
//       formData.append("s_name", name);
//       formData.append("s_mobile", mobile);
//       formData.append("s_email", email);
//       formData.append("s_img", image);

//       let res;
//       try {
//         if (formData) {
//           res = await api.put("/profile", formData);
//           console.log(res);
//         } else {
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });

//   return (
//     <div className="mt-20">
//       <div>
//         <h1 className="text-xl text-blue-950 dark:text-sky-400">
//           Edit Profile
//         </h1>
//       </div>
//       <form className="bg-white p-4 max-w-3xl rounded-md mx-auto dark:bg-gray-700">
//         <div className="max-w-2xl mx-auto p-4">
//           <div>img</div>
//           <div className="space-y-4">
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
//               >{Profile.s_name}</input>
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

//             {/* <div>
//                         <h1 className='text-sm md:text-base dark:text-lime-300'>Password</h1>
//                         <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             placeholder='Enter Your Password'></input>
//                     </div> */}
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import api from "@/utilliy/api";
// import { headersApplication, headerFormData } from "../../utilliy/headers";

// export default function EditProfile() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     getProfile();
//   }, []);

//   const getProfile = async () => {
//     try {
//       const res = await api.get("/profile", {
//         headers: await headersApplication(),
//       });
//       setProfile(res.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       name: profile?.s_name || "",
//       mobile: profile?.s_mobile || "",
//       email: profile?.s_email || "",
//       image: null,
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, "Minimum 3 letters required").required("Name is required"),
//       mobile: Yup.string()
//         .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//         .required("Mobile number is required"),
//       email: Yup.string().email("Invalid email address").required("Email is required"),
//       image: Yup.mixed(),
//     }),
//     onSubmit: async (values) => {
//       const formData = new FormData();
//       formData.append("s_name", values.name);
//       formData.append("s_mobile", values.mobile);
//       formData.append("s_email", values.email);
//       if (values.image) formData.append("s_img", values.image);

//       try {
//         const res = await api.put("/profile", formData, {
//           headers: await headerFormData(),
//         });
//         console.log("Profile updated:", res);
//         alert("Profile updated successfully!");
//       } catch (error) {
//         console.error("Update failed:", error);
//       }
//     },
//   });

//   return (
//     <div className="mt-20">
//       <h1 className="text-xl text-blue-950 dark:text-sky-400">Edit Profile</h1>
//       <form onSubmit={formik.handleSubmit} className="bg-white p-4 max-w-3xl rounded-md mx-auto dark:bg-gray-700">
//         <div className="max-w-2xl mx-auto p-4">
//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
//             <input
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Your Name"
//               className={`bg-gray-50 border ${formik.errors.name && formik.touched.name ? "border-red-500" : "border-gray-300"} text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
//             />
//             {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
//           </div>

//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
//             <input
//               name="mobile"
//               value={formik.values.mobile}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Your Mobile"
//               className={`bg-gray-50 border ${formik.errors.mobile && formik.touched.mobile ? "border-red-500" : "border-gray-300"} text-gray-900 rounded-lg`}
//             />
//             {formik.touched.mobile && formik.errors.mobile && <p className="text-red-500 text-sm">{formik.errors.mobile}</p>}
//           </div>

//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//             <input
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Your Email"
//               className={`bg-gray-50 border ${formik.errors.email && formik.touched.email ? "border-red-500" : "border-gray-300"} text-gray-900 rounded-lg`}
//             />
//             {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
//           </div>

//           <div>
//             <h1 className="text-sm md:text-base dark:text-lime-300">Profile Picture</h1>
//             <input
//               type="file"
//               name="image"
//               onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold"
//             />
//             {formik.touched.image && formik.errors.image && <p className="text-red-500 text-sm">{formik.errors.image}</p>}
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button type="submit" className="bg-[#0d6efd] px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "@/utilliy/api";
import { headersApplication, headerFormData } from "../../utilliy/headers";
import { useRouter } from 'next/router';

export default function EditProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const baseImageUrl = "http://192.168.0.103:4100/upload/";
  
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await api.get("/profile", {
        headers: await headersApplication(),
      });
      setProfile(res?.data?.data);
      // setImagePreview(res?.data?.data?.s_img);
      setImagePreview(`${baseImageUrl}${res?.data?.data?.s_img}`); 
      console.log("image console",`${baseImageUrl}${res?.data?.data?.s_img}`)
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: profile?.s_name || "",
      mobile: profile?.s_mobile || "",
      email: profile?.s_email || "",
      image: profile?.s_img || null,
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
      image: Yup.mixed(),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("s_name", values.name);
      formData.append("s_mobile", values.mobile);
      formData.append("s_email", values.email);
      if (values.image) formData.append("s_img", values.image);
      try {
        const res = await api.put("/profile", formData, {
          headers: await headerFormData(),
        });
        console.log("Profile updated:", res);
        alert("Profile updated successfully!");
        // router.reload();
        router.push('/View/Profile');
        setTimeout(() => {
          router.reload();
        }, 1000);
        // window.location.reload();
      } catch (error) {
        console.error("Update failed:", error);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-20 mb-20">
      <div>
        <h1 className='text-xl text-blue-950 dark:text-sky-400'>Edit Profile</h1>
      </div>
      <form onSubmit={formik.handleSubmit} className="bg-white p-4 max-w-3xl rounded-md mx-auto dark:bg-gray-700">
        <div className="max-w-2xl mx-auto space-y-4 p-4">
          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Name"
              className={`bg-gray-50 border ${
                formik.errors.name && formik.touched.name ? "border-red-500" : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600`}
            />
            {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
          </div>

          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
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
            {formik.touched.mobile && formik.errors.mobile && <p className="text-red-500 text-sm">{formik.errors.mobile}</p>}
          </div>

          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Email"
              className={`bg-gray-50 border ${
                formik.errors.email && formik.touched.email ? "border-red-500" : "border-gray-300"
              } block w-full p-2 text-gray-900 rounded-lg`}
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
          </div>

          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">Profile Picture</h1>
            {imagePreview && <img src={imagePreview} alt="Profile" className="mb-4 w-40 h-40 object-cover rounded-md" />}
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold"
            />
            {formik.touched.image && formik.errors.image && <p className="text-red-500 text-sm">{formik.errors.image}</p>}
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#0d6efd] hover:bg-blue-700 px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
