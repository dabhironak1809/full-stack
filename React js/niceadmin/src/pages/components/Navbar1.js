import { useState } from "react";
import Link from 'next/link'

export default function Navbar1() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-lg fixed   z-50 w-full h-16 ">
        <div className="flex justify-between">
            <div className=''>
                <Link href="/">
                    <div className="flex items-center ">
                        <img src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/logo.png" alt="Logo" className="h-5" />
                        <p className=" text-2xl text-[#042c72] font-medium ml-2 ">NiceAdmin</p>
                    </div>
                </Link>
                
            </div>
            <div className="flex">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-black hover:text-gray-800 focus:outline-none ml-7">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"}/>
                                                                                                            {/* M6 18L18 6M6 6l12 12 */}
                    </svg>
                </button>
                <div class="flex items-center border border-gray-300 rounded-sm p-2 shadow-sm w-80">
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
            <div className="items-center flex">
                    <div className="flex space-x-4 items-center">
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
                    </div>
                    <div className="">
                      <ul className="space-y-4">
                        <li>
                          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full  focus:outline-none">
                            <div className="flex items-center">
                              <i className="bi bi-menu-button-wide mr-2"></i>
                              <p className="text-[#042c72]">K . Anderson</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" className='text-[#042c72] hover:text-[#0f192b] ml-2' fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                              </svg>
                            </div>
                            <i className={`bi ${isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                          </button>
                          <ul className={`${isDropdownOpen ? "block" : "hidden"} ml-4 space-y-2`}>
                            <div className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white shadow-2xl mr-4 ">
                            <li className="pt-4">
                              <p className="text-center px-4 tracking-wide text-[#4f4f4f] font-semibold">Kevin Anderson</p>
                              <p className="text-center px-4 tracking-wide text-sm font-semibold text-[#929292]">Web Designer</p>
                            </li>
                            <hr className="mt-2"/>
                            <li className="text-[#3f4246]">
                              <a href="components-accordion.html" className="flex items-center px-4 py-3 text-sm space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                              </svg>
                                <p>My Profile</p>
                              </a>
                            </li>
                            <hr/>
                            <li className="text-[#3f4246]">
                              <a href="components-badges.html" className="flex items-center px-4 py-3 text-sm space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                              </svg>
                                <p>Account Settings</p>
                              </a>
                            </li>
                            <hr />
                            <li className="text-[#3f4246]">
                              <a href="components-tooltips.html"
                                className="flex items-center px-4 py-3 text-sm space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                                <p>Need Help?</p>
                              </a>
                            </li>
                            <hr />
                            <li className="text-[#3f4246]">
                              <a href="components-tooltips.html"
                                className="flex items-center px-4 py-3 text-sm space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                </svg>
                                <p>Sign out</p>
                              </a>
                            </li>

                            </div>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
        </div>
      </nav>
    </div>
  )
}
