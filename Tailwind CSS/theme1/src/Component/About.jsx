import React from 'react'

export default function About() {
    return (
        <>
            <section id="about" className=" items-center scroll-mt-30  ">

                {/* Heading with lines */}

                <div className="flex justify-center mt-8 sm:mt-10 mb-3">
                    <div className="flex items-center gap-3 sm:gap-2 px-1 text-center">

                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400"></div>

                        <span className="text-sky-800 font-bold
                     text-xl sm:text-2xl md:text-3xl lg:text-3xl
                     uppercase whitespace-nowrap selection:bg-black selection:text-[#38BDF8]">
                            ABOUT US
                        </span>
                        <div className="w-8 sm:w-16 md:w-14 h-[2px] bg-orange-400"></div>
                    </div>
                </div>
                {/* Description */}
                <div className="flex justify-center px-4">
                    <p className="font-serif text-sm sm:text-3xl    
                text-gray-600 text-center   max-w-5xl mb-2">
                        We are young but bold    </p>
                </div>


                <div className='flex justify-center'>
                    {/* text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, up to text-9xl. */}
                    {/* md:text-xl, lg:text-2xl */}
                    <p className='text-center text-[17px] font-bold text-lg text-gray-600 mb-4 selection:bg-black selection:text-sky-300 '>
                        SoftWingz is a leading IT company based in India that offers a wide range of technological solutions. Our team comprises highly skilled professionals who <br /> specialize in various technologies like Android, web development, IoT, and cloud function, among others.
                    </p>

                </div>

                {/* <div className="flex justify-center">
                    <p className="text-center">
                        SoftWingz is a leading IT company based in India that offers a wide range of technological solutions. Our team comprises highly skilled professionals who <br />
                        specialize in various technologies like Android, web development, IoT, and cloud function, among others.
                    </p>
                </div> */}

                {/* image and text allocate */}

                {/* <div className='max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center '> */}

                {/* img */}
                {/* <div className='flex justify-center    '>
                        <img src='/about/about.gif' />
                    </div> */}

                {/* text */}
                {/* <div className='flex flex-col justify-center  text-center  space-y-2  ' >

                      
                        <p className=' text-[19px]   font-normal text-gray-600 leading-normal'>At SoftWingz, we understand the <b>importance of data security </b> and take all necessary steps to ensure that your data and <b> platform are secured. We also focus on providing attractive and user-friendly UI/UX </b> to enhance your customers' experience.</p>

                        <p className=' text-gray-600 text-[19px]'>In addition to our core offerings, we also provide other services such as<b> listing your products on marketplaces and digital marketing to help expand your business reach.</b> We believe in providing our clients with a comprehensive IT solution, which is why we involve ourselves in the entire software life cycle, from market research to managing products.</p>

                        <p className=' text-gray-600 text-[19px]'>Our team does not just develop platforms, but also conducts business analysis and market research to provide a better platform than your competitors. We also provide <b> regular maintenance services for your admin panel</b> to ensure that your business runs smoothly.</p>

                        <p className=' text-gray-600 text-[19px]'>At SoftWingz, our focus is on customer satisfaction. <b> We strive to deliver projects on time and with the highest level of quality. We are committed to providing the best and most innovative solutions for your business needs. </b></p>

                        <p className='text-gray-600 text-[19px]'>Partner with SoftWingz and experience the difference.<b> Contact us today to learn more about our services and how we can help you achieve your business goals. </b> </p>
                    </div> */}

                <div className='max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center '>

                    {/* img */}
                    <div className='flex justify-center    '>
                        <img src='/about/about.gif' />
                    </div>

                    {/* text */}
                    <div className="flex flex-col items-center text-center space-y-4 lg:px-1">

                        <div className="w-full md:max-w-[55rem]">
                            <p className="text-[19px] font-normal text-gray-600 leading-relaxed">
                                At SoftWingz, we understand the <b>importance of data security </b> and take all necessary steps to ensure that your data and <b> platform are secured. We also focus on providing attractive and user-friendly UI/UX </b> to enhance your customers' experience. </p>

                            <p className="text-gray-600 text-[19px] mt-4">
                                In addition to our core offerings, we also provide other services such as<b> listing your products on marketplaces and digital marketing to help expand your business reach.</b> We believe in providing our clients with a comprehensive IT solution, which is why we involve ourselves in the entire software life cycle, from market research to managing products.
                            </p>

                            <p className="text-gray-600 text-[19px] mt-4">
                                Our team does not just develop platforms, but also conducts business analysis and market research to provide a better platform than your competitors. We also provide <b> regular maintenance services for your admin panel</b> to ensure that your business runs smoothly.
                            </p>

                            <p className="text-gray-600 text-[19px] mt-4">
                                At SoftWingz, our focus is on customer satisfaction. <b> We strive to deliver projects on time and with the highest level of quality. We are committed to providing the best and most innovative solutions for your business needs. </b>
                            </p>

                            <p className="text-gray-600 text-[19px] mt-4">
                                Partner with SoftWingz and experience the difference.<b> Contact us today to learn more about our services and how we can help you achieve your business goals. </b>
                            </p>
                        </div>

                    </div>


                </div>
                {/* </div> */}

            </section>



        </>
    )
}
