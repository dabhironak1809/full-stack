import "@/styles/globals.css";
// import Layout from "./component/layout/Layout";

import Navbar from "./component/layout/navbar";
import Nav from "./component/layout/Nav";
import Footer from "./component/layout/footer";

import Home from "./home";
import { useState } from "react";


export default function App({ Component, pageProps }) {

  // const [isLight,setIsLight] = useState(false)
  const [isLight, setIsLight] = useState(false); // ✅ theme state

  return (
    <>
      {/* <Layout>
        <Component {...pageProps} />  
      </Layout> */}

      <Navbar isLight={isLight} setIsLight={setIsLight} />
      {/* <Nav isLight={isLight} setIsLight={setIsLight} /> */}

      {/* <main className="pt-28 min-h-screen  "> */}
      <main className={`pt-28 min-h-screen transition-colors duration-300 ${isLight ? "bg-white text-black" : "bg-[#0f172a] text-white"}`}>

        {/* 1 */}
        {/* <Component {...pageProps} /> */}
        <Component {...pageProps} isLight={isLight} /> 
        {/* component all page are include this component . ex :-> home , contact service etc..  as all page include this */}


        {/* <Home /> */}

      </main>
      <Footer isLight={isLight} />


    </>
  );
}
