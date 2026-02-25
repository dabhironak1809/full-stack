import { useState , useContext} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { counterContext } from "../context/context";


export default function Sidebar({ isOpen, toggleSidebar }) {
    const [isComponentOpen, setIsComponentOpen] = useState(false);
    const [isFormsOpen, setIsFormsOpen] = useState(false);
    const [isTablesOpen, setIsTablesOpen] = useState(false);
    const [isChartsOpen, setIsChartsOpen] = useState(false);
    const [isIconsOpen, setIsIconsOpen] = useState(false);

      const router = useRouter();
      const counter = useContext(counterContext)
    return (
      
      <div className="px-1 sm:px-4 ">
        
        <ul className="space-y-2">
          
        <li className=" hover:bg-[#f6f9ff] text-[#092970] font-semibold hover:text-[#4154f1] py-3 pl-4 dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <button className="text-sm" onClick={()=>{localStorage.clear(),setTimeout(() => {
          router.reload();
        }, 500),router.push("/")}}>Sign out</button>
            
        </li>
        {/* <li className=" hover:bg-[#f6f9ff] text-[#092970] font-semibold hover:text-[#4154f1] py-3 pl-4 dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/SignUp"} className="flex items-center space-x-4">
              
            
              <p className="text-sm">Sign up</p>
              
            </Link>
          </li> */}

          <li className=" hover:bg-[#f6f9ff] text-[#092970] font-semibold hover:text-[#4154f1] py-3 pl-4 dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/Change_pass"} className="flex items-center space-x-4">
              
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
            </svg> */}
              <p className="text-sm">Change Password</p>
              
            </Link>
          </li>

          <li className=" hover:bg-[#f6f9ff] text-[#092970] font-semibold hover:text-[#4154f1] py-3 pl-4 dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/"} className="flex items-center space-x-4">
              
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
            </svg>
              <p className="text-sm">Dashboard</p>
              
            </Link>
          </li>
        
      
        {/* Components */}
        <li>
          <button
            onClick={() => setIsComponentOpen(!isComponentOpen)}
            className="flex items-center justify-between w-full hover:bg-[#f6f9ff] py-3 text-[#092970] font-semibold hover:text-[#4154f1] focus:outline-none dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500"
          >
            <div className="flex items-center space-x-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
              </svg>
              <p  className="text-sm">Components</p>
            </div>
            <i
              className={`bi ${
                isComponentOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isComponentOpen ? "block" : "hidden"
            } ml-4  mt-2`}
          >
            <li>
              <Link
                href="/components/View/com_alerts"
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Alerts
              </Link>
            </li>
            <li>
              <a
                href="components-accordion.html"
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Accordion
              </a>
            </li>
          </ul>
        </li>
        
        {/* Forms */}
        <li>
          <button
            onClick={() => setIsFormsOpen(!isFormsOpen)}
            className="flex items-center justify-between w-full hover:bg-[#f6f9ff] py-3 text-[#092970] font-semibold hover:text-[#4154f1] focus:outline-none dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500"
          >
            <div className="flex items-center space-x-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
              </svg>
              <p className="text-sm">Forms</p>
            </div>
            <i
              className={`bi ${
                isFormsOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isFormsOpen ? "block" : "hidden"
            } ml-4  mt-2`}
          >
            <li>
              <Link
                href={""}
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="class=bi bi-layout-text-window-reverse mr-2"></i>
                Form Elements
              </Link>
            </li>
            <li>
              <Link
                href="/View/multi_coul_form"
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Form Layouts
              </Link>
            </li>
          </ul>
        </li>

       {/* Tables */}
        <li>
          <button
            onClick={() => setIsTablesOpen(!isTablesOpen)}
            className="flex items-center justify-between w-full hover:bg-[#f6f9ff] py-3 text-left text-[#092970] font-semibold hover:text-[#4154f1] focus:outline-none dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500"
          >
            <div className="flex items-center space-x-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-window-reverse" viewBox="0 0 16 16">
                <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 4v10a1 1 0 0 0 1 1h2V4zm4 0v11h9a1 1 0 0 0 1-1V4z"/>
              </svg>
              <p className="text-sm">Tables</p>
            </div>
            <i
              className={`bi ${
                isTablesOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isTablesOpen ? "block" : "hidden"
            } ml-4  mt-2`}
          >
            <li>
              <Link 
                href={""}
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                General Tables
              </Link>
            </li>
            <li>
              <Link
                href={"/View/DataTables"}
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Data Tables
              </Link>
            </li>
          </ul>
        </li>
    
        {/* Charts */}
        <li>
          <button
            onClick={() => setIsChartsOpen(!isChartsOpen)}
            className="flex items-center justify-between hover:bg-[#f6f9ff] w-full py-3 text-left text-[#092970] font-semibold hover:text-[#4154f1] focus:outline-none dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500"
          >
            <div className="flex items-center space-x-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
              </svg>
              <p className="text-sm">Charts</p>
            </div>
            <i
              className={`bi ${
                isChartsOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isChartsOpen ? "block" : "hidden"
            } ml-4  mt-2`}
          >
            <li>
              <Link 
                href={""}
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Charts.js
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                ApexCharts
              </Link>
            </li>
          </ul>
        </li>

        {/* Icons */}
        <li>
          <button
            onClick={() => setIsIconsOpen(!isIconsOpen)}
            className="flex items-center justify-between hover:bg-[#f6f9ff] w-full py-3 text-left text-[#092970] font-semibold hover:text-[#4154f1] focus:outline-none dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500"
          >
            <div className="flex items-center space-x-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
              </svg>
              <p className="text-sm">Icons</p>
            </div>
            <i
              className={`bi ${
                isIconsOpen ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>
          <ul
            className={`${
              isIconsOpen ? "block" : "hidden"
            } ml-4  mt-2`}
          >
            <li>
              <Link 
                href={""}
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Bootstrap Icons
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center px-4 py-2 text-sm text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 "
              >
                <i className="bi bi-circle mr-2"></i>
                Remix Icons
              </Link>
            </li>
          </ul>
            <div className="bg-gray-400 text-white px-4 py-2 rounded-md">{counter}</div>
        </li>
        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/Custom_book"} >Custom_book</Link>
            </li>
            <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/Select2"}>Select 2</Link>
            </li>
            <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/Product"} >Product</Link>
            </li>
            <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/addmore3"} >Add More</Link>
            </li>
            <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
            <Link href={"/View/new"} >New</Link>
            </li>
        <li className="text-[#899bbd] py-2 text-xs dark:text-red-300">PAGES</li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <Link href={"/View/Profile"} className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              <p className="px-3 text-sm tracking-wide cursor-pointer">Profile</p>
            </Link>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">F.A.Q</p>
            </div>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">Contact</p>
            </div>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">Register</p>
            </div>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">Login</p>
            </div>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">Error 404</p>
            </div>
          </ul>
        </li>

        <li className="hover:bg-[#f6f9ff] w-full py-3 text-[#092970] font-semibold hover:text-[#4154f1] dark:text-amber-300 dark:hover:text-lime-300 dark:hover:bg-slate-500">
          <ul>
            <div className="flex pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
              </svg>
              <p className="px-3  cursor-pointer text-sm tracking-wide">Blank</p>
            </div>
          </ul>
        </li>


        </ul>
      </div>
    );
}

{/* {["Dashboard", "Profile", "Settings", "Logout"].map((item) => (
  <li key={item}>
    <a href="#" className="block text-gray-300 hover:text-white">
      {item}
    </a>
  </li>
))} */}