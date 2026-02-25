import React from 'react'

export default function Industires() {
    return (
        <>
            {/* Heading with lines */}
            <section id=" " className="container mx-auto pt-1 sm:pt-12 scroll-mt-28 ">

                <div className="flex justify-center mt-8 sm:mt-10 mb-4 ">
                    <div className="flex items-center gap-3 sm:gap-4 px-4 text-center mt-20">

                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        {/* <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>



                        <span className="text-sky-800 font-semibold
                     text-xl sm:text-3xl md:text-3xl lg:text-4xl
                     uppercase whitespace-nowrap">
                            Industries We Serve
                        </span>

                        {/* <div className="w-8 sm:w-16 md:w-20 h-px bg-orange-400"></div> */}
                        {/* <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div> */}
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 "></div>



                    </div>
                </div>

                {/* Description */}
                <div className="flex justify-center px-4">
                    <p className=" text-sm sm:text-[1.1vw]
                text-gray-600 text-center max-w-2xl mb-6">
                        Here, we make almost every genre of applications. You name it and we build it.
                    </p>
                </div>



                {/* 
            <div className='grid  px-6 gap-5 sm:grid-cols-2 lg:grid-cols-6 items-center justify-center place-content-center mx-auto max-w-7xl'> */}
                {/* <div className="gp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-1 gap-7 sm:mx-35 lg:mx-27 place-items-stretch">

                <div className="wf1 lg:w-full  flex flex-col items-center justify-center bg-white p-6 sm:p-2 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src="/Industries/1.png" className="h-16.5 w-16.5 mb-3" />
                    <h3 className="font-semibold text-xl text-center">  Education & E-learning     </h3>
                </div>

                <div className="wf1 w-full flex flex-col items-center justify-center lg:w-full bg-white p-6 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src='/Industries/2.png' className='h-16.5 w-16.5 mb-3' />
                    <h3 className='font-semibold text-xl text-center items-center'>Retail, Ecommerce</h3>
                </div>

                <div className="wf1 w-full flex flex-col items-center justify-center lg:w-full bg-white p-6 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src='/Industries/3.png' className='h-16.5 w-16.5 mb-3' />
                    <h3 className='font-semibold text-xl text-center items-center'>Social Networking</h3>
                </div>

                <div className="wf1 w-full flex flex-col items-center justify-center lg:w-full bg-white p-6 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src='/Industries/4.png' className='h-16.5 w-16.5 mb-3' />
                    <h3 className='font-semibold text-xl text-center items-center'>On-Demand Solutions</h3>
                </div>

                <div className="wf1 w-full flex flex-col items-center justify-center lg:w-full bg-white p-6 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src='/Industries/5.png' className='h-16.5 w-16.5 mb-3' />
                    <h3 className='font-semibold text-xl text-center items-center'>Food & Restaurant</h3>
                </div>

                <div className="wf1 w-full flex flex-col items-center justify-center lg:w-full bg-white p-6 rounded-md shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-gray-300">
                    <img src='/Industries/6.png' className='h-16.5 w-16.5 mb-3' />
                    <h3 className='font-semibold text-xl text-center items-center'>Entertainment Industry</h3>
                </div>




            </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 px-10 sm:px-30 lg:px-20 xl:px-25 place-items-stretch">

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300    ">
                        <img src="/Industries/1.png" alt="Education" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-center text-gray-600 leading-tight">Education &E-learning</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300  ">
                        <img src="/Industries/2.png" alt="Retail" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-gray-600 text-center leading-tight">Retail, Ecommerce</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300  ">
                        <img src="/Industries/3.png" alt="Social" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-gray-600 text-center leading-tight">Social Networking</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300  ">
                        <img src="/Industries/4.png" alt="On-Demand" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-gray-600 text-center leading-tight">On-Demand Solutions</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300  ">
                        <img src="/Industries/5.png" alt="Food" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-gray-600 text-center leading-tight">Food & Restaurant</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)] border border-gray-300  ">
                        <img src="/Industries/6.png" alt="Entertainment" className="h-16 w-16 mb-4 object-contain" />
                        <h3 className="font-bold text-xl text-gray-600 text-center leading-tight">Entertainment Industry</h3>
                    </div>

                </div>
            </section>

        </>
    )
}
