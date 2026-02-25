import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navisOpen, setNavIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (//flex ${isOpen ? "ml-64" : ""} transition-all duration-300
   <div className={`flex ${isOpen ? "ml-64" : ""} transition-all duration-300`}>
       <Sidebar isOpen={isOpen} />
   <div className="w-full">
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center ">
                        <img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/logo.png" alt="Logo" className="h-5" />
                        <p className=" text-2xl  ml-2">NiceAdmin</p>
                    </div>
                </Link>
                
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-5 items-center pl-32">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-gray-800 focus:outline-none ml-7">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                            </svg>
                        </button>
                        <div class="flex items-center border border-gray-300 rounded-md p-2 shadow-sm w-64">
                            <input
                                type="text"
                                placeholder="Search"
                                class="flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
                            />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
            
            

            <div className="hidden sm:ml-6 sm:flex sm:space-x-5 items-center">
                
                    <div className="sm:ml-6 sm:flex sm:space-x-5 items-center">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                            </svg>
                        </Link>
                        <Link href="/components/View/Body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </Link>
                        <Link href="/services">
                            <img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/profile-img.jpg" className="h-9 rounded-full"/>
                        </Link>
                        <ul className="space-y-4 px-4 ">
                        <li>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full  text-left  focus:outline-none"
          >
            <div className="flex items-center">
              <i className="bi bi-menu-button-wide mr-2"></i>
              <span>K . Anderson</span>
            </div>
            <i
              className={`bi ${
                isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } ml-4 space-y-2 mt-2`}
          >
            <li>
              <Link
                href="/components/View/com_alerts"
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
              >
                <i className="bi bi-circle mr-2"></i>
                Alerts
              </Link>
            </li>
            <li>
              <a
                href="components-accordion.html"
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
              >
                <i className="bi bi-circle mr-2"></i>
                Accordion
              </a>
            </li>
            <li>
              <a
                href="components-badges.html"
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
              >
                <i className="bi bi-circle mr-2"></i>
                Badges
              </a>
            </li>
            {/* Add more dropdown items as needed */}
            <li>
              <a
                href="components-tooltips.html"
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
              >
                <i className="bi bi-circle mr-2"></i>
                Tooltips
              </a>
            </li>
          </ul>
        </li>
        </ul>
                        
                    </div>
                
            </div>
          
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setNavIsOpen(!navisOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    navisOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${navisOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
        <div class="flex items-center border border-gray-300 rounded-md p-2 shadow-sm w-64">
            <input
                type="text"
                placeholder="Search"
                class="flex-grow focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-gray-600"
            />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
          </div>
          <Link href="/about">
            <p className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
     </div>
      </div>
  );
}




// import { useState } from "react";
// import Link from "next/link";
// import Sidebar from "./Sidebar";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`flex ${isOpen ? "ml-64" : ""} transition-all duration-300`}>
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} />

//       {/* Main Content */}
//       <div className="w-full">
//         <nav className="bg-gray-800">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="text-gray-400 hover:text-white focus:outline-none mr-4"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                     />
//                   </svg>
//                 </button>
//                 <Link href="/">
//                   <div className="flex items-center">
//                     <img
//                       src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/logo.png"
//                       alt="Logo"
//                       className="h-5"
//                     />
//                     <p className="text-white text-xl font-bold ml-2">Logo</p>
//                   </div>
//                 </Link>
//               </div>

//               {/* Navigation Links */}
//               <div className="hidden sm:flex space-x-4">
//                 {["Home", "About", "Services", "Contact"].map((item) => (
//                   <Link href={`/${item.toLowerCase()}`} key={item}>
//                     <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                       {item}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </nav>

//         <main className="p-6">
//           {/* Add your main content here */}
//           <h1 className="text-xl font-bold">Main Content Area</h1>
//         </main>
//       </div>
//     </div>
//   );
// }



