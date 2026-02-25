import React from 'react'

export default function Service() {
    return (
        <>
            <section id="services" className="pt-1 sm:pt-12 scroll-mt-28 ">

                {/* <div className="flex items-center justify-center mb-3">
                    <div className="flex items-center">
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div>
                        <span className="px-4 text-sky-800 font-semibold text-4xl uppercase">Services We Offer</span>
                         <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <p className='text-base text-gray-600 font-normal mb-4'>Simple solutions for complicated times</p>
                </div> */}
                <div className="flex justify-center mt-10  mb-4  ">
                    <div className="flex items-center gap-3 sm:gap-4 px-4 text-center mt-12  ">
                        <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div>
                        <span className="text-sky-800 font-bold
                     text-xl sm:text-2xl md:text-3xl lg:text-3xl
                     uppercase whitespace-nowrap">
                            Services We Offer
                        </span>
                        <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div>
                    </div>
                </div>
                {/* Description */}
                <div className="flex justify-center px-4">
                    <p className=" text-xs sm:text-base
                text-gray-600 text-center max-w-2xl mb-6">
                        Simple solutions for complicated times </p>
                </div>



                <div className='container mx-auto py-10 px-4'>

                    {/* Section One: Grid 1 */}
                    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">

                        {/* Card 1 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className='flex items-center gap-3 mb-6'>
                                    <img src='/service/c1/1.png' className='h-14 w-14 object-contain' alt="" />
                                    <h3 className='text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight'>App Development</h3>
                                </div>
                                <ul className='space-y-4 flex-1'>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'>
                                        <img src='/service/c1/a.svg' className='h-6 w-6' />
                                        <span className='font-semibold text-lg'>Flutter</span>
                                    </li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'>
                                        <img src='/service/c1/b.svg' className='h-6 w-6' />
                                        <span className='font-semibold text-lg'>Android App</span>
                                    </li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'>
                                        <img src='/service/c1/c.svg' className='h-6 w-6' />
                                        <span className='font-semibold text-lg'>iOS App</span>
                                    </li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'>
                                        <img src='/service/c1/d.svg' className='h-6 w-6' />
                                        <span className='font-semibold text-lg'>Kotlin</span>
                                    </li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'>
                                        <img src='/service/c1/e.svg' className='h-6 w-6' />
                                        <span className='font-semibold text-lg'>React Native</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className='flex items-center gap-3 mb-6'>
                                    <img src='/service/c2/2.png' className='h-14 w-14 object-contain' alt="" />
                                    <h3 className='text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight'>Web Development</h3>
                                </div>
                                <ul className='space-y-4 flex-1'>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/h.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>PHP</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/i.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Wordpress</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c1/a.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Flutter</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/j.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Python</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/magento.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Magento</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/react-js.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>React JS</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className='flex items-center gap-3 mb-6'>
                                    <img src='/service/c3/f.png' className='h-14 w-14 object-contain' alt="" />
                                    <h3 className='text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight'>Desktop Application</h3>
                                </div>
                                <ul className='space-y-4 flex-1'>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c2/j.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Python</span></li>
                                    <li className='flex items-center gap-5 group-hover:text-white transition-colors'><img src='/service/c1/a.svg' className='h-6 w-6' /><span className='font-semibold text-lg'>Flutter</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section Two: Grid 2 */}
                    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch mt-6">

                        {/* Card 4 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <img src="/service/c4/4.png" className="h-14 w-14 object-contain" />
                                    <h3 className="text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight">IOT Embedded</h3>
                                </div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c4/k.svg" className="h-6 w-6" /><span className="font-semibold text-lg">IOT Apps</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c4/n.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Embedded Software</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c4/o.svg" className="h-6 w-6" /><span className="font-semibold text-lg">IoT Hardware Prototyping</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c4/m.svg" className="h-6 w-6" /><span className="font-semibold text-lg text-left">IoT Dashboard & Analytics</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <img src="/service/c5/5.png" className="h-14 w-14 object-contain" />
                                    <h3 className="text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight">Digital Marketing</h3>
                                </div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c5/r.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Social Media</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c5/t.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Market Place</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c5/u.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Business Listing</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c5/v.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Survey</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="relative w-full p-10 md:p-0 lg:p-5 bg-white rounded-xl shadow-[0_0_2px_rgba(0,0,0,0.15)] overflow-hidden group flex flex-col min-h-[450px]">
                            <span className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-sky-100 z-0"></span>
                            <span className="absolute inset-0 bg-[#1f5d87] scale-0 origin-top-right transition-transform duration-300 ease-out group-hover:scale-100"></span>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <img src="/service/c6/6.png" className="h-14 w-14 object-contain" />
                                    <h3 className="text-xl md:text-[22px] font-bold text-gray-700 group-hover:text-white leading-tight">API Services</h3>
                                </div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c6/p.svg" className="h-6 w-6" /><span className="font-semibold text-lg">WhatsApp E-commerce</span></li>
                                    <li className="flex items-center gap-5 group-hover:text-white transition-colors"><img src="/service/c6/q.svg" className="h-6 w-6" /><span className="font-semibold text-lg">Custom API</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}

