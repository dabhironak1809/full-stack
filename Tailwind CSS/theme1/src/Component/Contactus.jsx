import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
export default function Contactus() {
    return (
        <>
            <section id="contact" className="mb-20 scroll-mt-30 ">


                <div className="flex justify-center mt-10  mb-4  ">
                    <div className="flex items-center gap-3 sm:gap-4 px-4 text-center mt-12  ">
                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>

                        <span className="text-sky-800 font-bold
                     text-xl sm:text-2xl md:text-3xl lg:text-3xl
                     uppercase whitespace-nowrap">
                            contact us
                        </span>
                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>

                    </div>
                </div>
                {/* Description */}
                <div className="flex justify-center px-4">
                    <p className=" text-sm sm:text-base
                text-gray-600 text-center max-w-2xl mb-6">
                        Get in touch, send us an e-mail or call us </p>
                </div>

                {/* ==== */}

                <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-3 mb-10 px-8  xs:px-30 sm:px-20 md:px-15 lg:px-20 xl:px-1  '>

                    <div className='flex flex-col text-center justify-center items-center  bg-[#f0ffff] p-20 md:p-10 h-full'>
                        <img src='/Contact/location-pin-svgrepo-com.svg' className='h-12 w-12   ' />
                        <p className='text-[#1b577e] font-semibold text-2xl'>Our Address</p>
                        <p className='text-gray-500'>2nd Floor, Bhayani Skyline, 202</p>
                        <p className='text-gray-500'>Atabhai Rd, opp. Jogger's park, Sardar Nagar</p>
                        <p className='text-gray-500'>Bhavnagar, Gujarat 364002.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2  gap-6 h-full'>

                        <div className='flex flex-col items-center justify-center text-center bg-[#f0ffff] p-20 md:p-6 *:h-full'>
                            <img src='/Contact/mail-shield-svgrepo-com.svg' className='h-12 w-12  ' />
                            <p className='text-[#1b577e] font-semibold text-2xl'>Email Us</p>
                            <p className='text-gray-500'>support@softwingz.com</p>

                        </div>

                        {/*  */}

                        <div className='flex flex-col items-center justify-center text-center bg-[#f0ffff] p-20 md:p-6 *:h-full'>
                            <img src='/Contact/phone-svgrepo-com.svg' className='h-12 w-12  ' />
                            <p className="text-[#1b577e] font-semibold text-2xl">Call Us</p>
                            <p className='text-gray-500'>+91 98765 43210</p>

                        </div>
                    </div>
                </div>

                {/* ======== */}

                <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto  h-full gap-5 px-8  xs:px-30 sm:px-20 md:px-15 lg:px-20 xl:px-1'>

                    <div className="w-full h-100 rounded-xs overflow-hidden shadow-lg">
                        <iframe
                            title="Bhavnagar Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.564019560757!2d72.14618931448253!3d21.764518985859585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f3c8d0f59c9ff%3A0x8de4b1f99e5a85be!2sBhavnagar%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1702889400000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* form */}
                    <div className='flex flex-col px-1 md:px-0 sm:w-90 md:w-auto md:justify-center gap-5'>
                        <input type='text' className='border h-10 rounded-xs border-gray-300 pl-5' placeholder=' Your Name ' />
                        <input type='email' className='border h-10 rounded-xs border-gray-300 pl-5' placeholder=' Your Email ' />
                        <input type='number' className='border h-10 rounded-xs border-gray-300 pl-5' placeholder=' Phone ' />


                        <textarea rows={5} className='border rounded-xs border-gray-300 pl-5' placeholder='Message'></textarea>

                        <div className='flex items-center justify-center'>
                            <button className="bg-[#1f5d87] hover:bg-amber-600 w-[10rem] rounded-full h-12 text-white font-semibold flex justify-center items-center">
                                Send Message
                            </button>
                        </div>
                    </div>

                </div>



            </section>

            <footer>
                {/* background image */}
                <div className=" h-auto  border border-sky-200 mb-10 xl:mb-10">

                    {/* footer main */}
                    {/* <div className="bg-[url('/footer/footer-bg.jpg')] bg-cover bg-center"> */}
                    <div className="w-full px-6 sm:px-10 lg:px-0">
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-2">

                            {/* LEFT SECTION */}
                            <div className="flex flex-col place-items-start lg:items-start text-center lg:text-left gap-4 w-full lg:w-1/2 ml-4">
                                <img
                                    src="/logo/logo.png"
                                    alt="SoftWingz"
                                    className="h-14 sm:h-16 md:h-18 w-auto"
                                />

                                <h4 className="text-base sm:text-lg font-medium text-gray-700">
                                    Do Not Forget To Follow Us On Social Media!
                                </h4>

                                <div className="flex gap-5 mt-2">
                                    <img src="/footer/twitter-3-svgrepo-com.svg" className="h-5 w-5 hover:scale-110 transition cursor-pointer" />
                                    <img src="/footer/instagram-167-svgrepo-com.svg" className="h-5 w-5 hover:scale-110 transition cursor-pointer" />
                                    <img src="/footer/facebook-svgrepo-com.svg" className="h-5 w-5 hover:scale-110 transition cursor-pointer" />
                                    <img src="/footer/linkedin-round-svgrepo-com.svg" className="h-5 w-5 hover:scale-110 transition cursor-pointer" />
                                </div>
                            </div>

                            {/* RIGHT SECTION */}
                            <div
                                className="  w-full lg:w-2/3  bg-[url('/footer/footer-bg.png')]  bg-contain lg:bg-cover  bg-center bg-no-repeat  flex items-center justify-center  py-2 ">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700 w-full px-4 sm:px-8">

                                    {/* Useful Links */}
                                    <div className="flex flex-col items-center sm:items-start gap-3">
                                        <p className="text-[1rem] text-sky-800 font-bold uppercase">
                                            Useful Links
                                        </p>

                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Home
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            About Us
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Services
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Team
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Contact
                                        </p>
                                    </div>

                                    {/* Services */}
                                    <div className="flex flex-col items-center sm:items-start gap-3">
                                        <p className="text-[1rem] text-sky-800 font-bold uppercase">
                                            Our Services
                                        </p>

                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            App Development
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Web Development
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Desktop Application
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            IOT & Embedded
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            Digital Marketing
                                        </p>
                                        <p className="flex items-center gap-2 hover:text-sky-600 cursor-pointer">
                                            <img src="/footer/arrow-next-small-svgrepo-com.svg" className="h-5 w-5" />
                                            API
                                        </p>
                                    </div>

                                    {/* Contact */}
                                    <div className="flex flex-col items-center md:items-start sm:col-span-2 lg:col-span-1">
                                        <p className="text-[1rem] text-sky-800 font-bold uppercase mb-3">
                                            Contact Us
                                        </p>

                                        <p className="leading-6 text-center sm:text-left">
                                            2nd Floor, Bhayani Skyline, 202 <br />
                                            Atabhai Rd, Opp. Jogger's Park <br />
                                            Sardar Nagar, Bhavnagar <br />
                                            Gujarat 364002
                                            <br /><br />
                                            <strong>Phone:</strong> +91 9023909022 <br />
                                            <strong>Email:</strong> support@softwingz.com
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="container mx-auto flex flex-col items-center justify-center text-center gap-1 mb-5">
                    <div className="text-[#012970] text-sm">
                        © Copyright{" "}
                        <span className="text-[#032562] font-bold">
                            SOFTWINGZ INFOTECH
                        </span>
                        . All Rights Reserved
                    </div>

                    <div className="text-[#3498db] text-[0.8rem]">
                        Designed & Developed by SOFTWINGZ INFOTECH
                    </div>
                </div>


            </footer>

        </>
    )
}
