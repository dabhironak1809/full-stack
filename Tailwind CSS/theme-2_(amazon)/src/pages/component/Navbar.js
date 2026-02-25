
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
const languages = [
    {
        code: "EN", label: "English"
    },
    {
        code: "HI", label: "हिन्दी"
    },
    {
        code: "TA", label: "தமிழ்"
    },
    {
        code: "TE", label: "తెలుగు"
    },
    {
        code: "KN", label: "ಕನ್ನಡ"
    },
    {
        code: "ML", label: "മലയാളം"
    },
    {
        code: "BN", label: "বাংলা"
    },
    {
        code: "MR", label: "मराठी"
    },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("EN");
    return (
        <header>
            <nav className="fixed top-0 w-full bg-[#131921] z-50">

                <div className="flex items-center  flex-nowrap px-2  md:px-5 h-10 md:h-16 gap-1 md:gap-3">

                    {/* Logo */}
                    <div className="flex items-center justify-center px-0.5 sm:px-[1vw] xl:px-1 flex-shrink-0">
                        <img
                            src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
                            className=" h-[2vw]  lg:h-7 xl:h-9 md:mt-3"
                            alt="Amazon"
                        />
                        <span className=" text-[1vw] md:text-[2vw] text-white lg:text-sm ml-1">.in</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center flex-shrink-0  sm:min-w-[110px] sm:gap-1">
                        <img src="/svg/location-pin-svgrepo-com.svg" className=" h-[2vw] md:h-4" />
                        <div className="flex flex-col text-white leading-tight">
                            <span className=" text-[1.5vw]  sm:text-[8px] md:text-[10px] xl:text-xs text-gray-300">Deliver to Bhavnagar 364001</span>
                            <span className="text-[1.5vw]  sm:text-[8px] md:text-[10px] xl:text-sm font-bold">Update location</span>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex w-full items-center justify-center   ">

                        {/* Select */}
                        <div className="relative flex items-center   ">
                            <select
                                className="  appearance-none  h-5 sm:h-6 md:h-8 lg:h-10  bg-[#e6e6e6] pl-1  sm:pl-1.5  text-[10px] md:text-[11px] xl:text-sm  rounded-l-sm  outline-none w-6 sm:w-8 md:w-10  xl:w-15  " >
                                <option>All</option>
                                <option>All Categories</option>
                                <option>Alexa Skills</option>
                                <option>Amazon Devices</option>
                                <option>Amazon Fashion</option>
                                <option>Amazon Fresh</option>
                                <option>Amazon Pharmacy</option>
                                <option>Appliances</option>
                                <option>Apps & Games</option>
                                <option>Audible Audiobooks</option>
                                <option>Baby</option>
                                <option>Beauty</option>
                                <option>Books</option>
                                <option>Car & Motorbike</option>
                                <option>Clothing & Accessories</option>
                                <option>Collectibles</option>
                                <option>Computers & Accessories</option>
                                <option>Deals</option>
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Garden & Outdoors</option>
                                <option>Gift Cards</option>
                                <option>Grocery & Gourmet Foods</option>
                                <option>Health & Personal Care</option>
                                <option>Home & Kitchen</option>
                                <option>Industrial & Scientific</option>
                                <option>Jewellery</option>
                                <option>Kindle Store</option>
                                <option>Luggage & Bags</option>
                            </select>

                            {/* Arrow */}
                            {/* <img src="/svg/downarrow.svg" className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 h-3 pointer-events-none"/> */}
                            <GoTriangleDown className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 h-3 pointer-events-none" />
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search Amazon.in"
                            className="  flex min-w-0 min-w-1.5  w-full  h-5 sm:h-6 md:h-8 lg:h-10  px-0.5 sm:px-2 md:px-3  bg-white  font-semibold  text-[7px] sm:text-[10px] md:text-[11px] xl:text-sm  outline-none" />

                        {/* Search button */}
                        <div className="flex items-center justify-center px-2  h-5 sm:h-6 md:h-8 lg:h-10   bg-[#febd69] rounded-r-sm flex-shrink-0">
                            <img src="/svg/search-alt-1-svgrepo-com.svg" className="h-3 md:h-4 xl:h-5" />
                        </div>
                    </div>


                    {/* Language */}
                    {open && (
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setOpen(false)}
                        />
                    )}
                    <div className="relative ">
                        {/* Button */}
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 w-10 md:w-14 xl:w-16 2xl:w-20 cursor-pointer" >
                            <img
                                src="/indian flag.avif"
                                className="h-[2vw] sm:h-2 md:h-3"
                                alt="India Flag"
                            />
                            <span className="text-white text-[2vw] sm:text-[8px] md:text-[10px] lg:text-sm font-semibold">
                                {selected}
                            </span>
                            <GoTriangleDown className="text-[#ffffffcf] h-2 xl:h-4" />
                        </div>

                        {/* Dropdown */}
                        {open && (
                            <div className="absolute -right-10 mt-2 w-59 bg-white rounded shadow-lg z-50 ml-3 p-4">
                                <div>choose your language</div>
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        onClick={() => {
                                            setSelected(lang.code);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#f5822a] hover:underline cursor-pointer flex gap-2"
                                    >
                                        <span className="font-semibold">{lang.code}</span>
                                        <span>{lang.label}</span>
                                    </div>
                                ))}
                                <div className="flex items-center border-t border-amber-500">
                                    <img
                                        src="/indian flag.avif"
                                        className="h-[2vw] sm:h-2 md:h-3"
                                        alt="India Flag"
                                    />
                                    <span className="text-[0.8vw]">You are shopping on Amazon.in</span>
                                </div>
                                <span className="text-[#06b4ff] text-[0.8vw] " >Change Country/Religiion</span>
                            </div>
                        )}
                    </div>


                    {/* Account */}
                    <div className="flex flex-col text-white leading-tight flex-shrink-0 md:min-w-[75px] lg:min-w-[95px]">
                        <span className=" text-[1.5vw] sm:text-[8px] md:text-[9px] xl:text-xs">Hello, sign in</span>
                        <span className="flex text-[1.5vw] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-sm font-semibold">Account & Lists
                            {/* <img src="/svg/downarrow2.svg" className="h-2  sm:h-2  xl:h-5" /> */}
                            <GoTriangleDown className="text-[#ffffffcf] h-2  sm:h-2  xl:h-5" />
                        </span>

                    </div>

                    {/* Orders */}
                    <div className="flex flex-col text-white leading-tight flex-shrink-0 md:min-w-[60px] lg:min-w-[70px]">
                        <span className="text-[1.5vw] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-sm">Returns</span>
                        <span className="text-[1.5vw] text-[8px] md:text-[9px] lg:text-[10px] xl:text-sm font-semibold">& Orders</span>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center flex-shrink-0 md:min-w-[60px] gap-1">
                        <img src="/svg/basket-svgrepo-com.svg" className=" h-[2vw] sm:h-3 md:h-5  lg:h-6 xl:h-7" />
                        <span className="text-white hidden md:block   md:text-[9px] lg:text-[10px] xl:text-sm font-semibold">Cart</span>
                    </div>

                </div>

                {/* ======= */}

                {/* <div className="flex text-white  bg-[#232f3e] p-3 gap-3"> */}

                <div className="flex flex-nowrap items-center  gap-2 md:gap-3 lg:gap-4 md:p-3 min-w-25 bg-[#232f3e] text-white whitespace-nowrap
                overflow-x-auto scrollbar-hide">

                    {/* Hamburger icon */}
                    <img
                        src="/svg/hamburger-svgrepo-com.svg"
                        alt="menu"
                        className="h-[2vw] sm:h-4 md:h-4 lg:h-5 xl:h-5 flex-shrink-0"
                    />

                    {/* Always visible items */}
                    <span className=" text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">All</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Fresh</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">MX Player</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Sell</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Bestseller</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Today's Deals</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Mobiles</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Customer Service</span>

                    {/* Prime with arrow */}
                    <span className="flex items-center  text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">
                        Prime
                        <img src="/svg/downarrow.svg" className="h-[2vw] md:h-5" />
                    </span>

                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">New Release</span>
                    <span className="text-[1.2vw] md:text-[1.5vw]      xl:text-[16px]  flex-shrink-0">Amazon Pay</span>

                    {/* Last 4 items hide gradually */}
                    <span className="hidden lg:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Fashion</span>
                    <span className="hidden xl:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Electronic</span>
                    <span className="hidden xl:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Home & Kitchen</span>
                    <span className="hidden xl:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Books</span>
                    <span className="hidden xl:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Computer</span>

                    {/* Gift Card only on XL */}
                    <span className="hidden 2xl:inline text-[1.2vw] md:text-[1.5vw]      xl:text-[16px] flex-shrink-0">Gift Card</span>

                </div>



            </nav>
        </header >
    );
}

export default Navbar;


// import React from "react";

// function Navbar() {
//     return (
//         <header>
//             <nav className="fixed top-0 w-full bg-[#131921] z-50">
//                 <div className="flex items-center flex-nowrap  px-5 h-[60px] gap-[clamp(6px,1vw,14px)]">

//                     <div className="flex items-center px-1 flex-shrink-0">
//                         <img
//                             src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
//                             className="h-5 md:h-6 lg:h-9 mt-3"
//                             alt="Amazon"
//                         />
//                         <span className="text-white">.in</span>
//                     </div>
//                     {/* Logo */}
//                     {/* <div className="flex px-5 items-center flex-shrink-0">
//                         <img
//                             src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
//                             className="h-[clamp(20px,2vw,32px)]"
//                             alt="Amazon"
//                         />
//                         <span className="text-white text-[clamp(10px,1vw,14px)] ml-1">.in</span>
//                     </div> */}

//                     {/* Location */}
//                     <div className="flex items-center  flex-shrink-0 min-w-[110px]">
//                         <img src="/svg/location-pin-svgrepo-com.svg" className="h-4" />
//                         <div className="text-white leading-tight">
//                             <span className="block text-[clamp(9px,0.9vw,12px)] text-gray-300">
//                                 Deliver to Bhavnagar
//                             </span>
//                             <span className="block text-[clamp(10px,1vw,14px)] font-semibold">
//                                 Update location
//                             </span>
//                         </div>
//                     </div>

//                     {/* Search (ONLY FLEX ITEM) */}
//                     <div className="flex flex-1 min-w-[120px] max-w-[900px]">
//                         <div className="flex items-center px-3 bg-[#e6e6e6] text-[clamp(10px,0.9vw,13px)] rounded-l-md flex-shrink-0">
//                             All
//                         </div>

//                         <input
//                             type="text"
//                             placeholder="Search Amazon.in"
//                             className="flex-1 min-w-0 h-10 px-3 bg-white text-[clamp(11px,1vw,14px)] outline-none"
//                         />

//                         <div className="flex items-center justify-center px-4 bg-[#febd69] rounded-r-md flex-shrink-0">
//                             <img src="/svg/search-alt-1-svgrepo-com.svg" className="h-5" />
//                         </div>
//                     </div>

//                     {/* Language */}
//                     <div className="flex items-center gap-1 flex-shrink-0 min-w-[48px]">
//                         <img src="/indian flag.avif" className="h-3" />
//                         <span className="text-white text-[clamp(10px,1vw,14px)] font-semibold">EN</span>
//                     </div>

//                     {/* Account */}
//                     <div className="flex flex-col text-white leading-tight flex-shrink-0 min-w-[95px]">
//                         <span className="text-[clamp(9px,0.9vw,12px)]">Hello, sign in</span>
//                         <span className="text-[clamp(11px,1vw,14px)] font-semibold">
//                             Account & Lists
//                         </span>
//                     </div>

//                     {/* Orders */}
//                     <div className="flex flex-col text-white leading-tight flex-shrink-0 min-w-[70px]">
//                         <span className="text-[clamp(10px,1vw,13px)]">Returns</span>
//                         <span className="text-[clamp(11px,1vw,14px)] font-semibold">& Orders</span>
//                     </div>

//                     {/* Cart */}
//                     <div className="flex items-center flex-shrink-0 min-w-[60px]">
//                         <img src="/svg/basket-svgrepo-com.svg" className="h-7" />
//                         <span className="text-white ml-1 text-[clamp(11px,1vw,14px)] font-semibold">
//                             Cart
//                         </span>
//                     </div>

//                 </div>
//             </nav>


//         </header>
//     );
// }

// export default Navbar;


// import React from "react";

// function Navbar() {
//     return (
//         <header className="overflow-x-hidden">
//             <nav className="fixed top-0 w-full bg-[#131921] z-50">
//                 <div className="max-w-[1400px] mx-auto px-2">
//                     <div className="flex items-center h-[60px] gap-2 min-w-0">

//                         {/* Logo */}
//                         <div className="flex items-center gap-1 flex-shrink-0">
//                             <img
//                                 src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
//                                 className="h-6 md:h-8"
//                                 alt="Amazon"
//                             />
//                             <span className="text-white text-sm truncate">.in</span>
//                         </div>

//                         {/* Location */}
//                         <div className="flex items-center gap-1 text-white flex-shrink min-w-0">
//                             <img src="/svg/location-pin-svgrepo-com.svg" className="h-4" />
//                             <div className="leading-tight truncate">
//                                 <span className="block text-xs text-gray-300 truncate">
//                                     Deliver to Bhavnagar
//                                 </span>
//                                 <span className="block text-sm font-semibold truncate">
//                                     Update location
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Search */}
//                         <div className="flex flex-1 min-w-0">
//                             <div className="flex items-center px-2 bg-[#e6e6e6] text-xs rounded-l-md flex-shrink-0">
//                                 All
//                             </div>

//                             <input
//                                 type="text"
//                                 placeholder="Search Amazon.in"
//                                 className="flex-1 min-w-0 h-10 px-3 text-sm outline-none"
//                             />

//                             <button className="flex items-center justify-center px-3 bg-[#febd69] rounded-r-md flex-shrink-0">
//                                 <img src="/svg/search-alt-1-svgrepo-com.svg" className="h-5" />
//                             </button>
//                         </div>

//                         {/* Language */}
//                         <div className="flex items-center gap-1 text-white flex-shrink min-w-0">
//                             <img src="/indian flag.avif" className="h-3" />
//                             <span className="text-sm font-semibold truncate">EN</span>
//                         </div>

//                         {/* Account */}
//                         <div className="flex flex-col text-white leading-tight flex-shrink min-w-0">
//                             <span className="text-xs truncate">Hello, sign in</span>
//                             <span className="text-sm font-semibold truncate">
//                                 Account & Lists
//                             </span>
//                         </div>

//                         {/* Orders */}
//                         <div className="flex flex-col text-white leading-tight flex-shrink min-w-0">
//                             <span className="text-xs truncate">Returns</span>
//                             <span className="text-sm font-semibold truncate">
//                                 & Orders
//                             </span>
//                         </div>

//                         {/* Cart */}
//                         <div className="flex items-center gap-1 text-white flex-shrink-0">
//                             <img src="/svg/basket-svgrepo-com.svg" className="h-6" />
//                             <span className="text-sm font-semibold truncate">Cart</span>
//                         </div>

//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;

// import React from 'react'

// function Navbar() {
//     return (
//         <header >
//             <div>

//                 <nav className='fixed top-0 w-full bg-[#131921] py-2 flex items-center' >
//                     {/* logo */}
//                     <div className='flex  items-center px-5'>
//                         <img src='/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif' className='h-9 mt-3  ' />
//                         <span className='text-white'>.in</span>
//                     </div>

//                     <div><img src='/svg/location-pin-svgrepo-com.svg' className='h-5 ' /> </div>
//                     <div className='text-white flex flex-col leading-3.5'>
//                         <span className='text-[#ffffffd5] text-[13px]'>Delivering to Bhavnagar 364001</span>
//                         <span>Update location</span>
//                     </div>

//                     <div className="flex px-5">
//                         <ul className="flex items-center justify-center h-10 px-6 bg-[#e6e6e6] text-[#a2a1a1] hover:text-black rounded-l-md text-[10px]">
//                             All</ul>
//                         <input type="text" placeholder="Search Amazon.in" className="h-10 px-3  w-[42vw] 2xl:w-[640px] text-left bg-white placeholder:text-[#656262df] outline-none" />

//                         <div className="flex items-center justify-center h-10 px-3 bg-[#febd69] hover:bg-[#ffb656] rounded-r-md">
//                             <img src="/svg/search-alt-1-svgrepo-com.svg" className="h-5" alt="search" />
//                         </div>
//                     </div>

//                     <div className='flex items-center gap-1'>
//                         <img src='/indian flag.avif' className='h-3' />
//                         <ul className='text-white font-semibold '>EN
//                         </ul>
//                     </div>
//                     <ul className='text-white flex flex-col leading-3.5 px-5'>
//                         <span className='text-[10px]'>Hello, sign in</span>
//                         <span>Account & Lists
//                         </span>
//                     </ul>

//                     <div className='text-white flex flex-col leading-3.5 px-3'>
//                         <span className='text-[13px]'>Returns</span>
//                         <span>& Orders</span>
//                     </div>

//                     <div className='flex flex-row items-center'>
//                         <img src='/svg/basket-svgrepo-com.svg' className='h-7' />
//                         <span className='text-white'>Cart</span>

//                     </div>
//                 </nav>

//             </div>
//         </header>
//     )
// }

// export default Navbar

// <nav className="fixed top-0 z-50 w-full bg-[#131921]">
//   <div className="container mx-auto flex items-center px-2 md:px-4 h-14">

//     {/* Logo */}
//     <div className="flex items-center flex-shrink-0 mr-2">
//       <img
//         src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
//         className="h-6 md:h-7 lg:h-8"
//         alt="Amazon"
//       />
//       <span className="text-white text-sm ml-1">.in</span>
//     </div>

//     {/* Location (hide on small screens) */}
//     <div className="hidden md:flex items-center gap-1 flex-shrink-0 text-white mr-3">
//       <img src="/svg/location-pin-svgrepo-com.svg" className="h-4" />
//       <div className="leading-3">
//         <span className="text-[11px] text-gray-300">
//           Delivering to Bhavnagar
//         </span>
//         <span className="text-sm font-semibold">Update location</span>
//       </div>
//     </div>

//     {/* Search Bar (ONLY FLEX ITEM) */}
//     <div className="flex flex-1 min-w-0 mx-2">
//       <div className="hidden sm:flex items-center px-3 bg-[#e6e6e6] text-xs rounded-l-md flex-shrink-0">
//         All
//       </div>

//       <input
//         type="text"
//         placeholder="Search Amazon.in"
//         className="h-10 px-3 flex-1 min-w-0 bg-white text-sm outline-none"
//       />

//       <div className="flex items-center justify-center px-3 bg-[#febd69] rounded-r-md flex-shrink-0">
//         <img
//           src="/svg/search-alt-1-svgrepo-com.svg"
//           className="h-5"
//           alt="search"
//         />
//       </div>
//     </div>

//     {/* Language (hide on md and below) */}
//     <div className="hidden lg:flex items-center gap-1 flex-shrink-0 text-white mr-3">
//       <img src="/indian flag.avif" className="h-3" />
//       <span className="font-semibold text-sm">EN</span>
//     </div>

//     {/* Account (hide on small) */}
//     <div className="hidden md:flex flex-col text-white leading-3 mr-3 flex-shrink-0">
//       <span className="text-xs">Hello, sign in</span>
//       <span className="text-sm font-semibold">Account & Lists</span>
//     </div>

//     {/* Orders (hide on small) */}
//     <div className="hidden md:flex flex-col text-white leading-3 mr-3 flex-shrink-0">
//       <span className="text-xs">Returns</span>
//       <span className="text-sm font-semibold">& Orders</span>
//     </div>

//     {/* Cart (always visible) */}
//     <div className="flex items-center flex-shrink-0 text-white">
//       <img src="/svg/basket-svgrepo-com.svg" className="h-7" />
//       <span className="hidden sm:inline ml-1 font-semibold">Cart</span>
//     </div>

//   </div>
// </nav>



// <nav className="container w-full fixed top-0 bg-[#131921] py-2 flex items-center flex-nowrap">

//             {/* Logo */}
// <div className="flex items-center px-5 flex-shrink-0">
//     <img
//         src="/logo/amazon-logo-black-background-xb9pdemosnjfz9ej.jfif"
//         className=" sm:h-5 md:h-6 lg:h-9 mt-3"
//         alt="Amazon"
//     />
//     <span className="text-white">.in</span>
// </div>

//             {/* Location */}
//             <div className="flex items-center gap-1 flex-shrink-0">
//                 <img src="/svg/location-pin-svgrepo-com.svg" className="h-5" />
//                 <div className="text-white flex flex-col leading-3.5">
//                     <span className="text-[#ffffffd5] text-[7px] md:text-[13px]">
//                         Delivering to Bhavnagar 364001
//                     </span>
//                     <span>Update location</span>
//                 </div>
//             </div>

//             {/* Search Bar (ONLY THIS SHRINKS) */}
//             <div className="flex px-5 flex-1 min-w-80">
//                 <div className="flex items-center justify-center h-10 px-6 bg-[#e6e6e6] text-[#a2a1a1] hover:text-black rounded-l-md text-[10px] flex-shrink-0">
//                     All
//                 </div>

//                 <input
//                     type="text"
//                     placeholder="Search Amazon.in"
//                     className="h-10 px-3 flex-1 min-w-0 text-left bg-white placeholder:text-[#656262df] outline-none" />

//                 <div className="flex items-center justify-center h-10 px-3 bg-[#febd69] hover:bg-[#ffb656] rounded-r-md flex-shrink-0">
//                     <img
//                         src="/svg/search-alt-1-svgrepo-com.svg"
//                         className="h-5"
//                         alt="search"
//                     />
//                 </div>
//             </div>

//             {/* Language */}
//             <div className="flex items-center gap-1 flex-shrink-0">
//                 <img src="/indian flag.avif" className="h-3" />
//                 <span className="text-white font-semibold">EN</span>
//             </div>

//             {/* Account */}
//             <div className="text-white flex flex-col leading-3.5 px-5 flex-shrink-0">
//                 <span className="text-[10px]">Hello, sign in</span>
//                 <span>Account & Lists</span>
//             </div>

//             {/* Orders */}
//             <div className="text-white flex flex-col leading-3.5 px-3 flex-shrink-0">
//                 <span className="text-[13px]">Returns</span>
//                 <span>& Orders</span>
//             </div>

//             {/* Cart */}
//             <div className="flex items-center flex-shrink-0 pr-5">
//                 <img src="/svg/basket-svgrepo-com.svg" className="h-7" />
//                 <span className="text-white ml-1">Cart</span>
//             </div>

//         </nav>