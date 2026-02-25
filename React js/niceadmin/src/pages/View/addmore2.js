// import React, { useState, useEffect } from "react";
// import api from "@/utilliy/api";
// import { headersApplication } from "@/utilliy/headers";
// import { useRouter } from "next/router";

// export default function AddMore() {
//   const router = useRouter();
//   const { pro } = router.query;
//   const [u_name, setName] = useState("");
//   const [u_email, setEmail] = useState("");
//   const [u_mobile, setMobile] = useState("");
//   const [entry_date, setEntdate] = useState("");

//   const [formFields, setFormFields] = useState([
//     { p_name: "", p_detail: "", no_of_person: "" },
//   ]);

//   console.log("date", entry_date);
//   console.log("u_id",pro)
//   useEffect(() => {
//     if (pro) {
//       const getData = async () => {
//         try {
//           const res = await api.get(`/user/${pro}`, {
//             headers: await headersApplication(),
//           });

//           setName(res?.data?.data?.[0]?.u_name || "");
//           setEmail(res?.data?.data?.[0]?.u_email || "");
//           setMobile(res?.data?.data?.[0]?.u_mobile || "");

//           // Reformat entry_date from API response
//           //   const apiDate = res?.data?.data?.[0]?.entry_date || "";
//           //   setEntdate(apiDate ? new Date(apiDate).toISOString().split("T")[0] : "");

//           const apiDate = res?.data?.data?.[0]?.entry_date || "";
//           if (apiDate) {
//             const date = new Date(apiDate);
//             const formattedDate = date.toLocaleDateString("en-CA"); // Ensures YYYY-MM-DD format in your locale
//             setEntdate(formattedDate);
//           } else {
//             setEntdate("");
//           }

//           setFormFields(res?.data?.data?.project || []);
//           console.log("add more data", res?.data?.data);
//         } catch (error) {
//           console.error("Error fetching profile data:", error);
//         }
//       };
//       getData();
//     } else {
//       // If no 'pro', set current date
//       const currentDate = new Date().toISOString().split("T")[0]; // Format date to YYYY-MM-DD
//       setEntdate(currentDate);
//     }
//   }, [pro]);

//   const addField = () => {
//     setFormFields([
//       ...formFields,
//       { p_name: "", p_detail: "", no_of_person: "" },
//     ]);
//   };

//   const removeField = (index) => {
//     const fields = formFields.slice();
//     fields.splice(index, 1);
//     setFormFields(fields);
//   };

//   const handleInputChange = (index, field, value) => {
//     const fields = [...formFields];
//     fields[index][field] = value;
//     setFormFields(fields);
//   };

//   const btnsubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const postfield = {
//         u_name,
//         u_email,
//         u_mobile,
//         entry_date,
//         project: formFields,
//       };
//       let res;
//       if (pro) {
//         console.log("if condition", pro);
//         res = await api.put(`/user/${pro}`, postfield, {
//           headers: await headersApplication(),
//         });
//         if (res?.status === 200) {
//           alert(res?.data?.data);
//           router.push("/View/Product");
//         }
//       } else {
//         res = await api.post("/user", postfield, {
//           headers: await headersApplication(),
//         });
//         if (res?.status === 200) {
//           alert(res?.data?.data);
//           router.push("/View/Product");
//         }
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//       alert("Please try again.");
//     }
//   };

//   return (
//     <div className="mt-20">
//       <form className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700 rounded-md">
//         <div className="pt-4 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
//               <input
//                 value={u_name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               ></input>
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <input
//                 value={u_email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               ></input>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Mobile
//               </h1>
//               <input
//                 value={u_mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               ></input>
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">
//                 Entry Date
//               </h1>
//               <input
//                 value={entry_date}
//                 type="date"
//                 onChange={(e) => setEntdate(e.target.value)}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           {formFields.map((field, index) => (
//             <div key={index} className="pt-4 space-y-4">
//               <hr />
//               <div className="flex justify-between">
//                 <h1>{index + 1}</h1>
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => removeField(index)}
//                     className="px-2 py-1 bg-red-300 rounded dark:text-black"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">
//                     Product Name
//                   </h1>
//                   <input
//                     value={field.p_name}
//                     onChange={(e) =>
//                       handleInputChange(index, "p_name", e.target.value)
//                     }
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">
//                     Product Detail
//                   </h1>
//                   <textarea
//                     value={field.p_detail}
//                     onChange={(e) =>
//                       handleInputChange(index, "p_detail", e.target.value)
//                     }
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     rows="1"
//                   />
//                 </div>

//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">
//                     No. Sales Person
//                   </h1>
//                   <input
//                     value={field.no_of_person}
//                     onChange={(e) =>
//                       handleInputChange(index, "no_of_person", e.target.value)
//                     }
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <hr />
//             </div>
//           ))}
//           <div className="flex justify-end pt-4">
//             <button
//               type="button"
//               onClick={addField}
//               className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="button"
//             onClick={btnsubmit}
//             className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "@/utilliy/api";
import { headersApplication } from "@/utilliy/headers";
import { useRouter } from "next/router";

export default function AddMore() {
  const router = useRouter();
  const { pro } = router.query;

  // State for dynamic form fields
  const [formFields, setFormFields] = useState([
    { p_name: "", p_detail: "", no_of_person: "" },
  ]);

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      u_name: "",
      u_email: "",
      u_mobile: "",
      entry_date: "",
      project: formFields,
    },
    validationSchema: Yup.object({
      u_name: Yup.string().required("Name is required"),
      u_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      u_mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      entry_date: Yup.date().required("Entry date is required"),
      project: Yup.array().of(
        Yup.object().shape({
          p_name: Yup.string().required("Product name is required"),
          p_detail: Yup.string().required("Product detail is required"),
          no_of_person: Yup.number()
            .typeError("Number of persons must be a number")
            .required("Number of persons is required")
            .positive("Number of persons must be positive"),
        })
      ),
    }),
    onSubmit: async (values) => {
      try {
        const postfield = {
          u_name: values.u_name,
          u_email: values.u_email,
          u_mobile: values.u_mobile,
          entry_date: values.entry_date,
          project: values.project,
        };
        let res;
        if (pro) {
          res = await api.put(`/user/${pro}`, postfield, {
            headers: await headersApplication(),
          });
        } else {
          res = await api.post("/user", postfield, {
            headers: await headersApplication(),
          });
        }
        if (res?.status === 200) {
          alert(res?.data?.data);
          router.push("/View/Product");
        }
      } catch (error) {
        console.error("Error occurred:", error);
        alert("Please try again.");
      }
    },
  });

  // Fetch data for editing
  useEffect(() => {
    if (pro) {
      const getData = async () => {
        try {
          const res = await api.get(`/user/${pro}`, {
            headers: await headersApplication(),
          });

          // Set Formik values
          formik.setValues({
            u_name: res?.data?.data?.[0]?.u_name || "",
            u_email: res?.data?.data?.[0]?.u_email || "",
            u_mobile: res?.data?.data?.[0]?.u_mobile || "",
            entry_date: res?.data?.data?.[0]?.entry_date
              ? new Date(res?.data?.data?.[0]?.entry_date)
                  .toISOString()
                  .split("T")[0]
              : "",
            project: res?.data?.data?.project || [],
          });

          // Update dynamic form fields
          setFormFields(res?.data?.data?.project || []);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
      getData();
    } else {
      // Set current date if no 'pro'
      const currentDate = new Date().toISOString().split("T")[0];
      formik.setFieldValue("entry_date", currentDate);
    }
  }, [pro]);

  // Add a new field
  const addField = () => {
    const newField = { p_name: "", p_detail: "", no_of_person: "" };
    setFormFields([...formFields, newField]);
    formik.setFieldValue("project", [...formFields, newField]);
  };

  // Remove a field
  const removeField = (index) => {
    const fields = formFields.slice();
    fields.splice(index, 1);
    setFormFields(fields);
    formik.setFieldValue("project", fields);
  };

  // Handle input change for dynamic fields
  const handleInputChange = (index, field, value) => {
    const fields = [...formFields];
    fields[index][field] = value;
    setFormFields(fields);
    formik.setFieldValue("project", fields);
  };

  return (
    <div className="mt-20">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700 rounded-md"
      >
        <div className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
              <input
                name="u_name"
                value={formik.values.u_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.u_name && formik.errors.u_name && (
                <div className="text-red-500 text-sm">{formik.errors.u_name}</div>
              )}
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
              <input
                name="u_email"
                value={formik.values.u_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.u_email && formik.errors.u_email && (
                <div className="text-red-500 text-sm">{formik.errors.u_email}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
              <input
                name="u_mobile"
                value={formik.values.u_mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.u_mobile && formik.errors.u_mobile && (
                <div className="text-red-500 text-sm">{formik.errors.u_mobile}</div>
              )}
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Entry Date</h1>
              <input
                name="entry_date"
                type="date"
                value={formik.values.entry_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.entry_date && formik.errors.entry_date && (
                <div className="text-red-500 text-sm">{formik.errors.entry_date}</div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Fields */}
        <div>
          {formFields.map((field, index) => (
            <div key={index} className="pt-4 space-y-4">
              <hr />
              <div className="flex justify-between">
                <h1>{index + 1}</h1>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="px-2 py-1 bg-red-300 rounded dark:text-black"
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">Product Name</h1>
                  <input
                    value={field.p_name}
                    onChange={(e) =>
                      handleInputChange(index, "p_name", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {formik.touched.project?.[index]?.p_name &&
                    formik.errors.project?.[index]?.p_name && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.project[index].p_name}
                      </div>
                    )}
                </div>
                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">Product Detail</h1>
                  <textarea
                    value={field.p_detail}
                    onChange={(e) =>
                      handleInputChange(index, "p_detail", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows="1"
                  />
                  {formik.touched.project?.[index]?.p_detail &&
                    formik.errors.project?.[index]?.p_detail && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.project[index].p_detail}
                      </div>
                    )}
                </div>
                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">No. Sales Person</h1>
                  <input
                    value={field.no_of_person}
                    onChange={(e) =>
                      handleInputChange(index, "no_of_person", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {formik.touched.project?.[index]?.no_of_person &&
                    formik.errors.project?.[index]?.no_of_person && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.project[index].no_of_person}
                      </div>
                    )}
                </div>
              </div>
              <hr />
            </div>
          ))}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={addField}
              className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
            >
              Add
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import api from "@/utilliy/api";
// import { headersApplication } from "@/utilliy/headers";
// import { useRouter } from "next/router";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// export default function AddMore() {
//   const router = useRouter();
//   const { pro } = router.query;

//   const [formFields, setFormFields] = useState([
//     { p_name: "", p_detail: "", no_of_person: "" },
//   ]);

//   // Form validation schema using Yup
//   const validationSchema = Yup.object({
//     u_name: Yup.string().required("Name is required"),
//     u_email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     u_mobile: Yup.string()
//       .matches(
//         /^[0-9]{10}$/,
//         "Mobile number must be 10 digits"
//       )
//       .required("Mobile is required"),
//     entry_date: Yup.date().required("Entry date is required"),
//     formFields: Yup.array().of(
//       Yup.object({
//         p_name: Yup.string().required("Product name is required"),
//         p_detail: Yup.string().required("Product detail is required"),
//         no_of_person: Yup.number()
//           .typeError("Must be a number")
//           .required("Number of sales persons is required")
//           .positive("Number must be positive")
//           .integer("Number must be an integer"),
//       })
//     ),
//   });

//   const formik = useFormik({
//     initialValues: {
//       u_name: "",
//       u_email: "",
//       u_mobile: "",
//       entry_date: "",
//       formFields: formFields,
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const postfield = {
//           u_name: values.u_name,
//           u_email: values.u_email,
//           u_mobile: values.u_mobile,
//           entry_date: values.entry_date,
//           project: values.formFields,
//         };
//         let res;
//         if (pro) {
//           res = await api.put(`/user/${pro}`, postfield, {
//             headers: await headersApplication(),
//           });
//           if (res?.status === 200) {
//             alert(res?.data?.data);
//             router.push("/View/Product");
//           }
//         } else {
//           res = await api.post("/user", postfield, {
//             headers: await headersApplication(),
//           });
//           if (res?.status === 200) {
//             alert(res?.data?.data);
//             router.push("/View/Product");
//           }
//         }
//       } catch (error) {
//         console.error("Error occurred:", error);
//         alert("Please try again.");
//       }
//     },
//   });

//   useEffect(() => {
//     if (pro) {
//       const getData = async () => {
//         try {
//           const res = await api.get(`/user/${pro}`, {
//             headers: await headersApplication(),
//           });

//           formik.setValues({
//             u_name: res?.data?.data?.[0]?.u_name || "",
//             u_email: res?.data?.data?.[0]?.u_email || "",
//             u_mobile: res?.data?.data?.[0]?.u_mobile || "",
//             entry_date: res?.data?.data?.[0]?.entry_date || "",
//             formFields: res?.data?.data?.project || [],
//           });
//         } catch (error) {
//           console.error("Error fetching profile data:", error);
//         }
//       };
//       getData();
//     } else {
//       const currentDate = new Date().toISOString().split("T")[0];
//       formik.setFieldValue("entry_date", currentDate);
//     }
//   }, [pro]);

//   const addField = () => {
//     const newFormFields = [...formik.values.formFields, { p_name: "", p_detail: "", no_of_person: "" }];
//     formik.setFieldValue("formFields", newFormFields);
//   };

//   const removeField = (index) => {
//     const newFormFields = [...formik.values.formFields];
//     newFormFields.splice(index, 1);
//     formik.setFieldValue("formFields", newFormFields);
//   };

//   return (
//     <div className="mt-20">
//       <form className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700 rounded-md" onSubmit={formik.handleSubmit}>
//         <div className="pt-4 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
//               <input
//                 name="u_name"
//                 value={formik.values.u_name}
//                 onChange={formik.handleChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               {formik.errors.u_name && formik.touched.u_name && <div className="text-red-500">{formik.errors.u_name}</div>}
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
//               <input
//                 name="u_email"
//                 value={formik.values.u_email}
//                 onChange={formik.handleChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               {formik.errors.u_email && formik.touched.u_email && <div className="text-red-500">{formik.errors.u_email}</div>}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
//               <input
//                 name="u_mobile"
//                 value={formik.values.u_mobile}
//                 onChange={formik.handleChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               {formik.errors.u_mobile && formik.touched.u_mobile && <div className="text-red-500">{formik.errors.u_mobile}</div>}
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base dark:text-lime-300">Entry Date</h1>
//               <input
//                 name="entry_date"
//                 value={formik.values.entry_date}
//                 onChange={formik.handleChange}
//                 type="date"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               {formik.errors.entry_date && formik.touched.entry_date && <div className="text-red-500">{formik.errors.entry_date}</div>}
//             </div>
//           </div>
//         </div>

//         <div>
//           {formik.values.formFields.map((field, index) => (
//             <div key={index} className="pt-4 space-y-4">
//               <hr />
//               <div className="flex justify-between">
//                 <h1>{index + 1}</h1>
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => removeField(index)}
//                     className="px-2 py-1 bg-red-300 rounded dark:text-black"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">Product Name</h1>
//                   <input
//                     name={`formFields[${index}].p_name`}
//                     value={field.p_name}
//                     onChange={formik.handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                   {formik.errors.formFields?.[index]?.p_name && formik.touched.formFields?.[index]?.p_name && (
//                     <div className="text-red-500">{formik.errors.formFields[index].p_name}</div>
//                   )}
//                 </div>

//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">Product Detail</h1>
//                   <textarea
//                     name={`formFields[${index}].p_detail`}
//                     value={field.p_detail}
//                     onChange={formik.handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     rows="1"
//                   />
//                   {formik.errors.formFields?.[index]?.p_detail && formik.touched.formFields?.[index]?.p_detail && (
//                     <div className="text-red-500">{formik.errors.formFields[index].p_detail}</div>
//                   )}
//                 </div>

//                 <div>
//                   <h1 className="text-sm md:text-base dark:text-lime-300">No. Sales Person</h1>
//                   <input
//                     name={`formFields[${index}].no_of_person`}
//                     value={field.no_of_person}
//                     onChange={formik.handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                   {formik.errors.formFields?.[index]?.no_of_person &&
//                     formik.touched.formFields?.[index]?.no_of_person && (
//                       <div className="text-red-500">
//                         {formik.errors.formFields[index].no_of_person}
//                       </div>
//                     )}
//                 </div>
//               </div>
//               <hr />
//             </div>
//           ))}
//           <div className="flex justify-end pt-4">
//             <button
//               type="button"
//               onClick={addField}
//               className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
