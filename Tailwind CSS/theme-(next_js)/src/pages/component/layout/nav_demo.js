
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // dropdown
//   const [menuOpen, setMenuOpen] = useState(false); // hamburger

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full px-6 md:px-20 2xl:px-0 bg-[#0f172ac2] text-white flex items-center justify-between z-50 shadow-lg backdrop-blur-sm">
//       {/* LOGO */}
//       <div className="p-5">
//         <Link href="/" className="text-[20px] 2xl:text-3xl font-semibold">
//           TailNext
//         </Link>
//       </div>

//       {/* HAMBURGER (MOBILE) */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden p-5"
//       >
//         <svg
//           className="w-7 h-7"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* MENU */}
//       <div
//         className={`absolute md:static top-16 left-0 w-full md:w-auto 
//         bg-[#0f172ac2] md:bg-transparent
//         flex flex-col md:flex-row gap-5 p-6 md:p-0
//         transition-all duration-300
//         ${menuOpen ? "block" : "hidden"} md:flex`}
//       >
//         {/* PAGES DROPDOWN */}
//         <div className="relative">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-1 text-[17px] 2xl:text-2xl"
//           >
//             Pages
//             <img src="/downarrow.svg" alt="arrow" />
//           </button>

//           {/* DROPDOWN */}
//           <ul
//             className={`absolute md:left-0 mt-3 bg-[#0f172ad2] border border-white/10 
//             rounded-md shadow-xl min-w-[230px]
//             ${isOpen ? "block" : "hidden"}`}
//           >
//             {[
//               { name: "Services", link: "/servic" },
//               { name: "Pricing", link: "/pricing" },
//               { name: "Contact Us", link: "/contactus" },
//               { name: "Dropdown", link: "/dropdown" },
//             ].map((item) => (
//               <li
//                 key={item.name}
//                 className="px-4 py-2 hover:bg-white/20 cursor-pointer"
//               >
//                 <Link href={item.link} onClick={handleLinkClick}>
//                   {item.name}
//                 </Link>
//               </li>
//             ))}

//             <li className="px-4 py-2 hover:bg-white/20 cursor-pointer">
//               About Us
//             </li>
//             <li className="px-4 py-2 hover:bg-white/20 cursor-pointer">
//               FAQs
//             </li>
//             <li className="px-4 py-2 hover:bg-white/20 cursor-pointer">
//               Terms & Conditions
//             </li>
//             <li className="px-4 py-2 hover:bg-white/20 cursor-pointer">
//               Privacy Policy
//             </li>
//           </ul>
//         </div>

//         {/* LINKS */}
//         <Link href="/blog" className="text-[17px] 2xl:text-2xl" onClick={handleLinkClick}>
//           Blog
//         </Link>

//         <Link href="/contact" className="text-[17px] 2xl:text-2xl" onClick={handleLinkClick}>
//           Contact
//         </Link>

//         {/* THEME TOGGLE */}
//         <button
//           onClick={() =>
//             document.documentElement.classList.toggle("dark")
//           }
//         >
//           <img src="/theme.svg" className="w-7 h-7" alt="theme" />
//         </button>

//         {/* DOWNLOAD BUTTON */}
//         <button className="bg-blue-700 px-5 py-2 rounded-md text-white text-[17px] 2xl:text-2xl">
//           Download
//         </button>
//       </div>
//     </nav>
//   );
// }


import Link from "next/link";
import React, { useState } from "react";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false); // ✅ theme state

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-20 2xl:px-0 flex justify-between
        items-center z-50 shadow-lg backdrop-blur-sm ${isLight ? "bg-white text-black" : "bg-[#0f172ac2] text-white"}`}
    >
      <div className="p-7 items-center">
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

      <div
        className={`absolute md:relative md:items-center top-full left-0 w-full md:w-auto
        bg-[#0f172ad2] md:bg-transparent flex flex-col md:flex-row gap-15 p-7
        ${menuOpen ? "block" : "hidden"} md:flex`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[17px] 2xl:text-2xl flex items-center gap-1"
        >
          Pages
          <img src="/downarrow.svg" alt="Logo" />
        </button>

        {/* dropdown */}
        <ul
          className={`absolute border-[0.5px] top-20 md:-left-1 bg-[#0f172ad2]
          text-white rounded-md shadow-2xl z-50 md:min-w-[250px] min-w-[90vw]
          ${isOpen ? "block" : "hidden"}`}
        >
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer">
            <Link href={"/servic"} onClick={handleLinkClick}>Services</Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer">
            <Link href={"/pricing"} onClick={handleLinkClick}>Pricing</Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer">
            <Link href={"/contactus"} onClick={handleLinkClick}>Contact Us</Link>
          </li>
          <li className="px-4 py-2 hover:bg-[#ffffff29] hover:rounded-md cursor-pointer">
            <Link href={"/dropdown"} onClick={handleLinkClick}>Dropdown</Link>
          </li>
        </ul>

        <a href="" className="text-[17px] 2xl:text-2xl">Blog</a>
        <a href="" className="text-[17px] 2xl:text-2xl">contact</a>

        {/* ✅ SAME BUTTON — ONLY LOGIC ADDED */}
        <button
          onClick={() => setIsLight(!isLight)}
          className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
          {isLight ? "Dark 🌙" : "Light ☀️"}
        </button>

        <button className="bg-blue-700 text-white px-5 py-2 2xl:px-7 2xl:py-3 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
}

export default navbar;
