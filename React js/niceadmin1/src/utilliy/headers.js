// const withAuth = (WrappedComponent) => {
//     return (props) => {
//       const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//       if (!token) {
//         router.push("/signin");
//         return null;
//       }
//       return <WrappedComponent {...props} />;
//     };
//   };

//   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// headers.js
// export function getAuthHeaders() {
//     const token = localStorage.getItem("token"); // Ensure the same key as in SignIn.js and _app.js
//     return {
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`, // Add a Bearer token authorization if using JWT
//       },
//     };
//   }

export const headersApplication = async () => {
  try {
    const headres = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };
    return headres;
  } catch (error) {
    console.log(error);
  }
};

export const headerFormData = async () => {
  try {
    const form = {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("token"),
    };
    return form;
  } catch (error) {
    console.log(error);
  }
};

// export const formsApplication = async()=>{
//     try {
//         const formData ={
//             'Content-Type':''
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
