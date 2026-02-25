import React from 'react'

export default function Process() {
    return (
        <>
            <section id="process" className="container  mx-auto pt-3 mt-5 sm:pt- scroll-mt-30  ">


                {/* <div className="flex items-center justify-center mb-10">
                    <div className="flex items-center">
         
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div>

                        <span className="px-4 text-sky-800 font-bold text-3xl lg:text-[2.2vw] uppercase">Process We Follow</span>
                     
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div>

                    </div>
                </div> */}

                <div className="flex justify-center mb-15  ">
                    <div className="flex items-center gap-3 sm:gap-4 px-4 text-center mt-12  ">
                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>

                        <span className="text-sky-800 font-semibold
                     text-xl sm:text-2xl md:text-3xl lg:text-3xl
                     uppercase whitespace-nowrap">
                            Process We Follow
                        </span>
                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>

                    </div>
                </div>



                {/* === */}

                {/* main */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-5">

                    {/* 1. Business Analysis */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full ">
                        <img src='/process/1.png' alt="Analysis" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>1. Business Analysis</h3>
                        <p className='text-gray-700 text-md leading-none'>Identify core business aspects & growth opportunities while assessing competitor strategies, it helps uncover the organization's nature & potential for expansion.</p>
                    </div>

                    {/* 2. Requirement Gathering */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/2.png' alt="Requirements" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>2. Requirement Gathering</h3>
                        <p className='text-gray-600 text-md leading-none'>We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.</p>
                    </div>

                    {/* 3. UI/UX Design */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/3.png' alt="Design" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>3. UI/UX Design</h3>
                        <p className='text-gray-600 text-md leading-none'>We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.</p>
                    </div>

                    {/* 4. Prototype */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/4.png' alt="Prototype" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>4. Prototype</h3>
                        <p className='text-gray-600 text-md leading-none'>After designing, you will get your prototype, which will be sent ahead for the development process for the product.</p>
                    </div>

                    {/* 5. Development */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/5.png' alt="Development" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>5. Development</h3>
                        <p className='text-gray-600 text-md leading-none'>Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
                    </div>

                    {/* 6. Quality Assurance */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/6.png' alt="QA" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>6. Quality Assurance</h3>
                        <p className='text-gray-600 text-md leading-none'>SoftWingz values quality and provides 100% bug free application with no compromisation in it.</p>
                    </div>

                    {/* 7. Deployment */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/7.png' alt="Deployment" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>7. Deployment</h3>
                        <p className='text-gray-600 text-md leading-none'>After trial and following all processes, your app is ready to launch on the App store or Play Store.</p>
                    </div>

                    {/* 8. Support & Maintenance */}
                    <div className="flex flex-col items-center text-center gap-4 bg-white p-8 md:p-6 lg:p-4 xl:p-8 rounded-xl shadow-[5px_10px_0px_#1f5d87,0_0px_2px_rgba(0,0,0,0.12)] h-full">
                        <img src='/process/7.png' alt="Support" className='h-16 w-20 object-contain mt-2' />
                        <h3 className='text-lg font-semibold'>8. Support & Maintenance</h3>
                        <p className='text-gray-600 text-md leading-none'>Our company offers you all support and the team is always ready to answer every query after deployment.</p>
                    </div>
                </div>

            </section >
        </>
    )
}
