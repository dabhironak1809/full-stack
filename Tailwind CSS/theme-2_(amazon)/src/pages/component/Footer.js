import React, { useState } from 'react'
import { GoGlobe } from "react-icons/go";
const languages = [
    { code: "EN", label: "English" },
    { code: "HI", label: "हिन्दी" },
    { code: "TA", label: "தமிழ்" },
    { code: "TE", label: "తెలుగు" },
    { code: "KN", label: "ಕನ್ನಡ" },
    { code: "ML", label: "മലയാളം" },
    { code: "BN", label: "বাংলা" },
    { code: "MR", label: "मराठी" },
];

function Footer() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("EN");
    return (
        <div>
            <footer className='bg-[#232f3e]'>
                <div className='bg-[#37475a] flex justify-center items-center p-4'>
                    <a href="#home-top" className='text-white text-sm'>Back to top </a>
                </div>

                <div className=" flex justify-center sm:container sm:mx-auto px-4 sm:px-6 lg:px-10 xl:px-30 2xl:px-60 mb-10 mt-10">
                    <div className="grid  gap-4 sm:gap-4 md:gap-5  lg:gap-6 xl:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 leading-3 sm:leading-4  xl:leading-relaxed">

                        {/* Column 1 */}
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold text-[2.5vw] sm:text-[2vw]  md:text-[15px] ">Get to Know Us</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm ">About Amazon</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Careers</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Press Releases</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Amazon Science</span>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold text-[2.5vw] sm:text-[2vw]  md:text-[15px]">Connect with Us</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Facebook</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Twitter</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Instagram</span>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold text-[2.5vw] sm:text-[2vw]  md:text-[15px]">Make Money with Us</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Sell under Amazon Accelerator</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Protect and Build Your Brand</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Amazon Global Selling</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Supply to Amazon</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Become an Affiliate</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Fulfilment by Amazon</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Advertise Your Products</span>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold text-[2.5vw] sm:text-[2vw]  md:text-[15px]">Let Us Help You</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Returns Centre</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Recalls and Product Safety Alerts</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">100% Purchase Protection</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Amazon App Download</span>
                            <span className="text-white/60 hover:underline text-[2.5vw] sm:text-[2vw]  md:text-sm">Help</span>
                        </div>

                    </div>
                </div>



                <div className="border-t border-white/28 py-5">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-20">

                        {/* Logo */}
                        <img
                            src="/logo/amazon_translate.png"
                            className="h-8 sm:h-10 md:h-10 lg:h-10"
                            alt="Amazon"
                        />

                        {/* Language Selector */}
                        <div className="flex gap-2 mt-2 sm:mt-0">

                            {/* Dropdown */}
                            <div className="relative">
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="flex border border-white rounded gap-2 sm:gap-4 items-center justify-start text-start py-2 px-4 sm:px-7 cursor-pointer"
                                >
                                    <GoGlobe className="text-white text-sm sm:text-base" />
                                    <span className="text-white text-sm sm:text-base">English</span>
                                </div>

                                {open && (
                                    <div className="absolute right-0 -mt-1.5 w-44 sm:w-56 bg-white rounded shadow-lg z-50 p-2">
                                        <div className="px-2 py-1 text-sm font-medium">Choose your language</div>
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.code}
                                                onClick={() => {
                                                    setSelected(lang.code);
                                                    setOpen(false);
                                                }}
                                                className="px-3 py-1 text-sm hover:bg-gray-100 hover:text-orange-500 hover:underline cursor-pointer flex gap-2"
                                            >
                                                <span className="font-semibold">{lang.code}</span>
                                                <span>{lang.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Overlay for closing dropdown */}
                                {open && (
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setOpen(false)}
                                    />
                                )}
                            </div>

                            {/* Country Selector */}
                            <div className="flex items-center gap-2 border border-white rounded py-2 px-4 sm:px-5 flex-shrink-0">
                                <img src="/indian flag.avif" className="h-4 sm:h-5 md:h-6" alt="flag" />
                                <span className="text-white text-xs sm:text-sm md:text-base font-semibold">EN</span>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='  bg-[#131a22]'>
                    <div className='flex justify-center sm:container sm:mx-auto'>
                        <div className=' lg:px-30  xl:px-40  2xl:px-50  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 pt-7'>

                            <div className='flex flex-col gap-5 '>
                                <div className='flex flex-col '>
                                    <span className='text-white  hover:underline text-[2vw] sm:text-[1.5vw]  md:text-[10px]'>AbeBooks</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Books, art <br /> & collectibles</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Shopbop</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Designer <br /> & Fashion Brands</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col '>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Amazon Web Services</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Scalable Cloud <br /> Computing Services</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>
                                        Amazon Business</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Everything For <br /> Your Business</span>
                                </div>
                            </div>


                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col '>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Audible</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Scalable Cloud <br /> Computing Services</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>
                                        Amazon Prime Music</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>100 million songs, ad-free <br /> Over 15 million podcast episodes </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col '>
                                    <span className='text-white text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>IMDb</span>
                                    <span className='text-[#ffffff8e] text-[2vw] sm:text-[1.5vw]  md:text-[10px] hover:underline'>Movies, TV <br /> & Celebrities</span>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>

                <div className="bg-[#131a22] text-white">
                    <div className="  max-w-7xl mx-auto   px-4 sm:px-6   flex flex-col   items-center   pt-10 pb-6   gap-2 ">
                        <ul className="  flex flex-wrap  justify-center  gap-x-4 gap-y-1  text-xs  text-[##c2c2c2]">
                            <li className="hover:underline cursor-pointer">
                                Conditions of Use & Sale
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Privacy Notice
                            </li>
                            <li className="hover:underline cursor-pointer">
                                Interest-Based Ads
                            </li>
                        </ul>

                        <span className="text-xs text-[##c2c2c2] text-center">
                            © 1996–2026, Amazon.com, Inc. or its affiliates
                        </span>
                    </div>
                </div>




            </footer>
        </div>
    )
}

export default Footer
