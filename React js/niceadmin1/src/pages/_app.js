// import { useEffect,useState } from "react";
// import "@/styles/globals.css";
// import Layout from "./components/Layout";
// import SignIn from "./View/SignIn";
// import SignUp from "./View/SignUp";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router=useRouter()
//   const [auth,setAuth] = useState("");
//   // useEffect(()=>{
//   //   setAuth(localStorage.getItem("token"));
//   // },[auth]);
//   useEffect(() => {
//     setAuth(localStorage.getItem("token"));
//   }, []); // Remove `auth` from dependency array to avoid infinite re-renders.
  
//   if (auth) {
//     return(
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>

//     );
//   // } else if(router.asPath=="/View/SignUp") {
//   } else if (router.pathname === "/View/SignUp") {
//     return<SignUp/>
//   }else{
//     return<SignIn/>
//   }
//   // console.log(Component)
//   // return (
//   //   <Layout>
//   //   <Component {...pageProps} />;
//   //   </Layout>
//   //  );
// }
// import { useEffect,useState } from "react";
// import "@/styles/globals.css";
// import Layout from "./components/Layout";
// import SignIn from "./View/SignIn";
// import SignUp from "./View/SignUp";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router=useRouter()
//   const [auth,setAuth] = useState("");
//   useEffect(() => {
//     setAuth(localStorage.getItem("token"));
//   }, []); 
  
//   if (auth) {
//     return(
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//     );
//   } else if (router.pathname === "/View/SignUp") {
//     return<SignUp/>
//   }else{
//     return<SignIn/>
//   }
// }

// import { useEffect, useState } from "react";
// import "@/styles/globals.css";
// import Layout from "./components/Layout";
// import SignIn from "./SignIn";
// import SignUp from "./View/SignUp";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
//   const [auth, setAuth] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setAuth(token);
//   }, []);

//   useEffect(() => {
//     if (auth && (router.pathname === "/View/SignIn" || router.pathname === "/View/SignUp")) {
//       router.push("/View/Dashbord"); 
//     }
//   }, [auth, router]);

//   if (auth) {
//     return (
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     );
//   } else {
//     if (router.pathname === "/View/SignUp") {
//       return <SignUp />;
//     } else {
//       return <SignIn />;
//     }
//   }
// }

import "@/styles/globals.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />;
  </Layout>
 );
}
