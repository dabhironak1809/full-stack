import Link from "next/link";
// import Header from "./Header";
// import Header from "./Header";

import Header from "./comp/Header"; // another file import a this file without routing 

import Count from "./comp/count";

export default function Home() {
  return (

    <>
      {/* <p className="bg-indigo-100 text-[#92d780] font-bold text-5xl text-center ">this is a sample code </p> */}

      {/* <Header /> */}
      <Header />
      <div className="flex gap-10 justify-center mt-10">


        <Link href={"/about"}>About</Link>

        <Link href={"/comp/home"}>Home</Link>

        <div className="mt-10 text-center flex flex-col ">

          <Count />
        </div>

      </div>
    </>

  );
}
