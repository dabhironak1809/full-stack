import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function BoxSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },]
  };


  return (
    <div className='bg-blue-50 mt-7'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <div className='flex items-center justify-center mt-9'>
          <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-orange-500 mr-4'></div>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-sky-700'>TESTIMONIALS</h1>
          <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-orange-500 ml-4'></div>
        </div>
      </div>
      <p className='pb-10 text-center'>we hear you</p>




      <div className=" p-10">

        <Slider {...settings}>
          <div>
            <div className='bg-white  rounded text-left shadow-2xl mx-10 '>

              <div className="flex">
                <img className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                  <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                  <p>Ceo & Founder</p>
                </div>
              </div>
              {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
              <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
              <p className='px-16 py-4'>
                Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.
              </p>
            </div>
          </div>


          <div>
            <div className='bg-white  rounded text-left shadow-2xl mx-10'>

              <div className="flex">
                <img className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                  <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                  <p>Ceo & Founder</p>
                </div>
              </div>
              {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
              <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
              <p className='px-16 py-4'>
                Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.
              </p>
            </div>
          </div>

          <div>
            <div className='bg-white rounded text-left shadow-2xl mx-10'>

              <div className="flex">
                <img className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                  <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                  <p>Ceo & Founder</p>
                </div>
              </div>
              {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
              <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
              <p className='px-16 py-4'>
                Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.
              </p>
            </div>
          </div>

          <div>
            <div className='bg-white rounded text-left shadow-2xl mx-10'>

              <div className="flex">
                <img className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                  <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                  <p>Ceo & Founder</p>
                </div>
              </div>
              {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
              <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
              <p className='px-16 py-4'>
                Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.
              </p>
            </div>
          </div>

          <div>
            <div className='bg-white rounded text-left shadow-2xl mx-10'>

              <div className="flex">
                <img className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                  <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                  <p>Ceo & Founder</p>
                </div>
              </div>
              {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
              <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
              <p className='px-16 py-4'>
                Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support.
              </p>
            </div>
          </div>

        </Slider>
      </div>



    </div>
  )
}



// ========
<div className="slider-container w-[92vw] mx-auto overflow-hidden">
  <div className="w-full max-w-7xl mx-auto">
    <Slider {...settings}>

      {/* INSTRUCTIONS: 
                1. The outer <div> (Slide Wrapper) manages the GAP using px-2 or px-4.
                2. The inner <div> (The Card) manages the DESIGN and HEIGHT.
            */}

      {/* ================= SLIDE 1 ================= */}
      <div className="px-2 sm:px-10 py-10"> {/* This padding creates the GAP */}
        <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-[320px] sm:h-[280px] flex flex-col w-full">

          {/* Profile Image - Positioned relative to the card */}
          <div className="absolute -left-3 sm:-left-10 top-8 z-10">
            <div className="bg-white p-1 rounded-md shadow-lg border border-gray-100">
              <img
                src="/logo/b.jpg"
                alt="Profile"
                className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">Suresh Mehta</h3>
            <p className="text-sm text-gray-500 font-medium">Ceo & Founder</p>
          </div>

          <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />

          <div className="flex-grow overflow-hidden">
            <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">“Simply professionals”</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-snug">
              Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated.
              <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="inline-block h-5 w-5 align-baseline ml-1" />
            </p>
          </div>
        </div>
      </div>

      {/* ================= SLIDE 2 ================= */}
      <div className="px-2 sm:px-10 py-10">
        <div className="relative bg-white rounded-sm shadow-sm border border-gray-100 p-6 pl-14 sm:pl-20 h-[320px] sm:h-[280px] flex flex-col w-full">
          <div className="absolute -left-3 sm:-left-10 top-8 z-10">
            <div className="bg-white p-1 rounded-md shadow-lg border border-gray-100">
              <img src="/logo/b.jpg" alt="Profile" className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-md" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">Ridhdhi Shah</h3>
            <p className="text-sm text-gray-500 font-medium">Designer</p>
          </div>

          <img src="/logo/quotation-mark-svgrepo-com.svg" className="h-5 w-5 mb-2" />

          <div className="flex-grow overflow-hidden">
            <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">“They are the best”</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-snug">
              If you’re in search of a reliable, innovative software company, look no further than Softwingz Infotech. Their team consistently exceeds expectations.
              <img src="/logo/quotation-right-mark-svgrepo-com.svg" className="inline-block h-5 w-5 align-baseline ml-1" />
            </p>
          </div>
        </div>
      </div>

      {/* ... Repeat the same <div> structure for other slides ... */}

    </Slider>
  </div>
</div>