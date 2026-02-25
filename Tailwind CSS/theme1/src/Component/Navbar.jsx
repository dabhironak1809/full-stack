import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* <nav className="w-full bg-white fixed top-0 z-50 py-6 shadow">
                <div className="max-w-324 mx-auto   ">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-start ">
                            <img src="/logo/logo.png" alt="Softwingz" className="h-21 w-63" />
                        </div>
                         
                        <div className="hidden lg:flex items-center gap-2 text-gray-700 font-medium">
                            <a href="#home" className="text-orange-500  font-normal m-3 ">Home</a>
                            <a href="#about" className="hover:text-orange-500 text-gray-500 font-normal m-3">About</a>
                            <a href="#services" className="hover:text-orange-500 text-gray-500 font-normal m-3">Services</a>
                            <a href="#" className="hover:text-orange-500 text-gray-500 font-normal m-2">Team</a>
                            <a href="#contact" className="hover:text-orange-500 text-gray-500 font-normal m-2">Contact</a>
                            <a href="#" className="ml-4 bg-[#1f5d87] text-white px-6 py-2 rounded-full hover:bg-[#174a6b] transition font-normal" >
                                Get Started
                            </a>
                        </div>
                        <button className="lg:hidden text-2xl px-10 ">
                            ☰
                        </button>
                    </div>
                </div>
            </nav> */}

            <nav className="w-full bg-white fixed top-0 z-50 py-4 shadow">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">

                        {/* LOGO */}
                        <img src="/logo/logo.png" alt="Softwingz" className="h-21 w-63" />


                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
                            <a href="#home" className="text-orange-500">Home</a>
                            <a href="#about" className="hover:text-orange-500 text-gray-500">About</a>
                            <a href="#services" className="hover:text-orange-500 text-gray-500">Services</a>
                            <a href="#team" className="hover:text-orange-500 text-gray-500">Team</a>
                            <a href="#contact" className="hover:text-orange-500 text-gray-500">Contact</a>
                            <a
                                href="#"
                                className="ml-4 bg-[#1f5d87] text-white px-6 py-2 rounded-full"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* HAMBURGER */}
                        <button
                            className="lg:hidden text-3xl z-[60]"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* MOBILE OVERLAY */}
                {open && (
                    <div
                        className="fixed inset-0 bg-[#000000d8] z-40 lg:hidden"
                        onClick={() => setOpen(false)} >

                        {/* MENU BOX */}
                        <div
                            className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-4 text-center z-50"
                            onClick={(e) => e.stopPropagation()} >

                            {/* CLOSE BUTTON */}
                            <button
                                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
                                onClick={() => setOpen(false)}>
                                ✕
                            </button>

                            <a href="#home" className="block text-orange-500">Home</a>
                            <a href="#about" className="block text-gray-600">About</a>
                            <a href="#services" className="block text-gray-600">Services</a>
                            <a href="#team" className="block text-gray-600">Team</a>
                            <a href="#contact" className="block text-gray-600">Contact</a>

                            <a href="#" className="inline-block mt-4 bg-[#1f5d87] text-white px-6 py-2 rounded-full" >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </nav>

        </>
    )
}
