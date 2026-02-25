import React from 'react'

function services({ isLight }) {
    return (
        <div className='container mx-auto'>
            <div className='mx-auto '>
                <div className='py-12 md:py-20'>

                    <div className='mx-auto max-w-6xl pb-10 text-center md:pb-16'>


                        <div className='flex flex-col items-center justify-center mb-9'>
                            <p className={` text-4xl font-bold tacking-tighter md:text-5xl lg:text-6xl           ${isLight ? "text-[#fb0303c7]" : "text-black"}`}>Elevate your projects with our stunning templates</p>

                        </div>
                        <div>
                            <p className='text-4xl font-medium tacking-tighter md:text-2xl lg:text-3xl text-[#94a3b8]'>
                                TailNext is a production ready template to start your new website using {''}
                                <span className='italic'>
                                    Next.js + Tailwind CSS. </span> It has been designed following Best Practices, SEO, Accessibility, Dark  Mode, great Page Speed, image optimization.
                            </p>
                        </div>

                        {/* button */}
                        <div className='flex gap-8 justify-center mt-10'>
                            <button className='border border-[#fff0] flex gap-2 py-5 px-15 text-2xl bg-blue-700 hover:bg-blue-800  font-semibold  rounded-lg'>
                                {/* <img src='/download.svg' /> */}
                                Start Exploring</button>

                            {/* <button className='border py-5 px-10 text-2xl rounded-lg hover:bg-[#ffffff33]'>Learn more</button> */}
                        </div>
                    </div>

                </div>
            </div>
            {/* image  */}


            <div className="bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#080e1fe5] pt-24 pb-24">
                <div className="container mx-auto px-10">
                    <img
                        src="/image/hero.jpg"
                        className="rounded-xl w-full"
                        alt="Hero"
                    />
                </div>
            </div>

            {/*  */}

            <div className="bg-[#1e293b] container mx-auto pb-20 pt-24 ">
                <div className="  flex items-center justify-center">
                    <p className="text-7xl font-bold text-[#ffffffbf] ">Our Services</p>
                </div>

                <div className='grid grid-cols-3 px-10 gap-10 mt-20'>

                    <div className="bg-[#0f172a] gap-6 p-10 rounded-lg card flex flex-start min-w-screen-sm items-stretch h-full">
                        {/* Icon */}
                        <div className="flex flex-shrink-0">
                            <img
                                src="/service/tailwind.svg"
                                className="h-12 w-12"
                                alt="Tailwind" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col text-[#ffffffad]">
                            <span className="text-3xl font-semibold text-white">
                                Next.js + Tailwind CSS Integration
                            </span>
                            <p className="text-2xl mt-8 leading-md max-w-xl">
                                Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#0f172a] gap-6 p-10 rounded-lg card flex flex-start min-w-screen-sm items-stretch h-full">
                        {/* Icon */}
                        <div className="flex flex-shrink-0">
                            <img
                                src="/service/redy_to_use.svg"
                                className="h-12 w-12"
                                alt="Tailwind" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col text-[#ffffffad]">
                            <span className="text-3xl font-semibold text-white">
                                Ready-to-use Components
                            </span>
                            <p className="text-2xl mt-8 leading-md max-w-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div><div className="bg-[#0f172a] gap-6 p-10 rounded-lg card flex flex-start min-w-screen-sm items-stretch h-full">
                        {/* Icon */}
                        <div className="flex flex-shrink-0">
                            <img
                                src="/service/best_practice.svg"
                                className="h-12 w-12"
                                alt="Tailwind" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col text-[#ffffffad]">
                            <span className="text-3xl font-semibold text-white">
                                Best Practices
                            </span>
                            <p className="text-2xl mt-8 leading-md max-w-xl">
                                Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default services
