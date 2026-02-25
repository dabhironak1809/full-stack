import Link from "next/link";
import React, { useState } from "react";

function navbar({isLight,setIsLight}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const [isLight, setIsLight] = useState(false); // ✅ theme state


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0  left-0 w-full px-20 2xl:px-0 flex justify-between items-center z-50 shadow-lg backdrop-blur-sm ${isLight ? "bg-white text-black" : "bg-[#0f172ac2] text-white"}`}>
      <div className="p-7 items-center ">
        <a href="/" className=" text-[20px] 2xl:text-3xl font-semibold">
          TailNext
        </a>
      </div>
      {/* HAMBURGER (MOBILE) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-5"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* <div className="flex relative gap-15 p-7 items-center"> */}
      {/* <div className={`flex relative gap-15 p-7 items-center
    ${menuOpen ? "block" : "hidden"} md:flex`}
        > */}
      <div className={`absolute md:relative md:items-center top-full left-0 w-full md:w-auto bg-[#0f172ad2] md:bg-transparent flex flex-col md:flex-row gap-15 p-7 ${menuOpen ? "block" : "hidden"} md:flex `} >

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[17px] 2xl:text-2xl flex items-center gap-1"
        >
          Pages
          <img src="/downarrow.svg" alt="Logo" />
        </button>

        {/* dropdown */}
        <ul
          className={`absolute border-[0.5px] top-20 md:-left-1 bg-[#0f172ad2] text-white rounded-md shadow-2xl z-50 md:min-w-[250px] min-w-[90vw] transition-all ${isOpen ? "block" : "hidden"}`}>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            <Link href={"/servic"} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            <Link href={"/pricing"} onClick={handleLinkClick}>
              Pricing
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            <Link href={"/contactus"} onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            <Link href={"/dropdown"} onClick={handleLinkClick}>
              Dropdown
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            About Us
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            FAQs
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            Terms & Conditions
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer text-[17px] 2xl:text-2xl">
            Privacy Policy
          </li>
        </ul>

        <a href="" className="text-[17px] 2xl:text-2xl">
          Blog
        </a>
        <a href="" className="text-[17px] 2xl:text-2xl">
          contact
        </a>

        {/* THEME CHANGE BUTTON (only addition) */}
        <button
          onClick={() => setIsLight(!isLight)}
          className={`px-4 py-2 rounded-md
                   text-black dark:text-white${isLight ? "bg-white text-black" : "bg-[#0f172ac2] text-white"}`}>
          { isLight ? "Light ☀️" : "Dark 🌙"}
        </button>

        <button className="bg-blue-700 text-white px-5 py-2 2xl:px-7 2xl:py-3 text-[17px] 2xl:text-2xl rounded-md">
          Download
        </button>
      </div>
    </nav>


  );
}

export default navbar;

