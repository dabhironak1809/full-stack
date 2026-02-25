import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false, // optional
        centerMode: false, // prevents gaps on edges
        responsive: [
            {
                breakpoint: 1280, // <= 1280px
                settings: { slidesToShow: 2, centerMode: false }
            },
            {
                breakpoint: 1200, // <= 1024px
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 640, // <= 640px
                settings: { slidesToShow: 1 }
            }
        ]
    };


    return (
        <>
            <div className="bg-[#f7fbfe] mt-28">

                {/* Heading */}
                <div className="flex justify-center mt-8 sm:mt-10 ">
                    <div className="flex items-center gap-3 sm:gap-4 px-4 text-center">
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 mt-15"></div>
                        <span className="text-sky-800 font-bold text-xl sm:text-2xl md:text-3xl uppercase whitespace-nowrap mt-15">
                            Testimonials
                        </span>
                        <div className="w-8 sm:w-12 md:w-14 h-[2px] bg-orange-400 mt-15"></div>
                    </div>
                </div>

                <div className="flex justify-center px-4">
                    <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mt-5 mb-6">
                        We hear you!
                    </p>
                </div>


                {/* Slider */}
                <div className="sh slider-container w-[92vw] h-[100vh] sm:h-[30rem]  mx-auto overflow-hidden">
                    <div className=" w-full max-w-7xl mx-auto ">
                        <Slider {...settings}>


                            {/* ================= SLIDE 1 ================= */}
                            {/* <div className="px-4 sm:px-10 lg:px-20 py-10"> */}

                            <div className="px-2 sm:px-12  py-1 sm:py-10  sm:mb-10 ">

                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}


                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Suresh Mehta
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Ceo & Founder
                                        </p>
                                    </div>

                                    {/* <div className="text-4xl text-sky-200 ">“</div> */}
                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                                            “Simply professionals”
                                        </h4>
                                        <p className=" text-gray-600 text-sm sm:text-base leading-snug ">
                                            Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.

                                        </p>
                                        <img src="/logo/quotation-right-mark-svgrepo-com.svg" className=" inline-block h-5 w-5 align-baseline leading-none ml-1" />
                                    </div>

                                </div>

                            </div>


                            {/* ================= SLIDE 2 ================= */}
                            <div className="px-2 sm:px-12 py-10 ">

                                {/* <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-auto  sm:h-[280px] flex flex-col w-full"> */}
                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}


                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Ridhdhi Shah
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Designer
                                        </p>
                                    </div>

                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                                            “They are the best”
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">
                                            If you’re in search of a reliable, innovative software company, look no further than Softwingz Infotech. Their team of seasoned professionals consistently exceeds expectations, offering cutting-edge solutions.

                                            <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="  inline-block h-5 w-5 align-baseline  ml-1" />
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* ================= SLIDE 3 ================= */}
                            <div className="px-2 sm:px-12 py-10 ">

                                {/* <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full"> */}
                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}



                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Reena Patel
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Store Owner
                                        </p>
                                    </div>

                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                            “We just love them”
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">

                                            You showed incredible leadership instincts in your work on that project. I would love to work with you. Amazing work.They took the time to understand our unique needs and developed a tailored solution that exceeded our expectations.

                                            <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="  inline-block h-5 w-5 align-baseline leading-none ml-1" />
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* ================= SLIDE 4 ================= */}
                            <div className="px-2 sm:px-10 py-10  ">

                                {/* <div className=" relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full "> */}
                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}


                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Krishna Makwana
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Freelancer
                                        </p>
                                    </div>

                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                            “Great job”
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">


                                            The analytics and reporting dashboard provides us with valuable insights into user behavior. We can track our marketing efforts and make data-driven decisions to optimize our strategies.


                                            <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="  inline-block h-5 w-5 align-baseline leading-none ml-1" />
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* ================= SLIDE 5 ================= */}
                            <div className="px-2 sm:px-12 py-10  ">

                                {/* <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full"> */}
                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}

                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Anil Shah
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Entrepreneur
                                        </p>
                                    </div>

                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                            “We just love them”
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">

                                            You showed incredible leadership instincts in your work on that project. I would love to work with you. Amazing work.They took the time to understand our unique needs and developed a tailored solution that exceeded our expectations.

                                            <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="  inline-block h-5 w-5 align-baseline leading-none ml-1" />
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* ================= SLIDE 6 ================= */}
                            <div className="px-2 sm:px-12 py-10 ">

                                {/* <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full"> */}
                                <div className="relative bg-white rounded-sm border border-gray-100  p-6 pl-14 sm:pl-20 h-auto sm:h-[280px] flex flex-col w-full  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                    <div className="absolute left-8 sm:-left-10 top-5 sm:top-8 z-10">
                                        <div className="bg-white p-1 rounded-md sm:shadow-lg border border-gray-100 ">
                                            <img
                                                src="/logo/b.jpg"
                                                alt="Profile"
                                                className="h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-sm shadow-sm p-6 sm:p-8 pl-12 sm:pl-16 w-full min-h-[19rem] flex flex-col border border-gray-100"> */}



                                    <div className="mt-25 sm:mt-0 mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Reena Patel
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Store Owner
                                        </p>
                                    </div>

                                    <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />


                                    <div className="flex-grow overflow-hidden">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                            “We just love them”
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">

                                            You showed incredible leadership instincts in your work on that project. I would love to work with you. Amazing work.They took the time to understand our unique needs and developed a tailored solution that exceeded our expectations.

                                            <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="  inline-block h-5 w-5 align-baseline leading-none ml-1" />
                                        </p>
                                    </div>
                                </div>
                            </div>




                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
