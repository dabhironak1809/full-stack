import React from 'react'

export default function Home() {
    return (
        <>
            {/* grid property :->      grid grid-cols-[1fr_500px_2fr] */}

            <section id="home" className="pt-10 sm:pt-12 scroll-mt-28 ">
                <div className="max-w-7xl mx-auto px-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">

                    {/* LEFT TEXT */}
                    <div className="flex flex-col items-center text-center gap-2 order-2 lg:order-1">
                        <h1 className="text-center font-semibold text-black  text-3xl sm:text-4xl lg:text-5xl
                     leading-tight tracking-tight  lg:mt-0">
                            Let's Sprout the <br />
                            Software Wingz in Your <br />
                            Business
                        </h1>

                        <button className=" border-2 border-[#1f5d87] text-[#1f5d87] px-10 py-2.5 rounded-full hover:bg-[#1f5d87] hover:text-white transition duration-400 ">
                            Get Started
                        </button>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="flex flex-col items-center text-center gap-4 order-1 lg:order-2">
                        <img
                            src="/home/main.gif"
                            alt="Hero"
                            className="max-w-full h-auto" />
                    </div>
                </div>


                {/* Marquee Section Wrapper */}
                <div className='w-full bg-[#1f5d87] mt-1.5'>
                    <div className="relative overflow-hidden px-20 mx-auto md:max-w-4xl lg:max-w-6xl h-20 flex items-center justify-center">

                        <p className="whitespace-nowrap text-white text-lg sm:text-xl md:text-2xl uppercase font-semibold px-4 animate-marquee-right flex items-center justify-center tracking-wide">
                            SoftWingz is not just an IT company, but your partner in growth.
                        </p>

                    </div>
                </div>

                <br></br>

                {/* Top of page */}
                <div id="home" className=' border-[#1f5d87] bg-[#1f5d87] '>


                    <a href="#home " className=' '>
                        <img
                            src="/home/up-arrow-svgrepo-com.svg"
                            className="h-10 w-10 fixed right-6 bottom-6 
               cursor-pointer hover:scale-110 
               transition-transform duration-300 border bg-[#1f5d87] rounded border-none "
                        />
                    </a>


                    <img
                        src="/home/ch.svg"
                        className="h-15 w-15 fixed left-6 bottom-6 
               cursor-pointer hover:scale-110 
               transition-transform duration-300 border bg-[#1f5d87] border-none   p-3 rounded-full "
                    />



                </div>
            </section>



        </>
    )
}
