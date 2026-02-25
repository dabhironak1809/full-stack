import React from 'react'

export default function Body() {
  return (
    <div className='bg-white p-7'>

      <div className='flex'>
        <img src='https://dhramshala.in/wp-content/uploads/2023/10/Ram-Mandir-Ayodhya-1.jpg' className='w-6/12 rounded-lg-'></img>
        <div className='box-border  w-full p-4'>
          
          <div>
            <h1 className='text-center text-2xl text-orange-600 font-bold'>This is a Best Tour Package</h1>
          </div>

          <div className='pt-4 pl-4'>
            <div className='flex space-x-4'>
              <p className='font-bold text-lg'>Destination</p>
              <p className='font-bold text-lg'>:</p>
              <p className='font-bold text-lg text-red-700'>Ayodhya</p>
            </div>
          </div>

          <div className='pt-4 pl-4'>
            <div className='flex space-x-4'>
              <p className='font-bold text-lg text-red-700'>4</p>
              <p className='font-bold text-lg'>Days</p>
              <p className='font-bold text-lg'>&</p>
              <p className='font-bold text-lg text-red-700'>3</p>
              <p className='font-bold text-lg'>Night Trip</p>
            </div>
          </div>

          <div className='pt-4 pl-4'>
            <div className='flex space-x-4'>
              <p className='font-bold text-lg'>Hotal Name</p>
              <p className='font-bold text-lg'>:</p>
              <p className='font-bold text-lg text-red-700'>Narayan Niwas</p>
            </div>
          </div>

          <div className='pt-4 pl-4'>
            <div className='flex space-x-4'>
              <p className='font-bold text-lg'>Sightseeing Vehicle</p>
              <p className='font-bold text-lg'>:</p>
              <p className='font-bold text-lg text-red-700'>Innova</p>
            </div>
          </div>

          <div className='pt-4 pl-4'>
            <div className='flex space-x-4'>
              <p className='font-bold text-lg'>Price</p>
              <p className='font-bold text-lg'>:</p>
              <p className='font-bold text-lg text-red-700'>9000/-</p>
            </div>
          </div>

        </div>
      </div>
      
      <div className='mt-10'>
        <div className='box-border h-20  bg-neutral-300 rounded-full mb-7'>
          <div className='flex items-center justify-center pt-5'>
            <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4'></div>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-red-700'>Custom Bookings</h1>
            <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4'></div>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-between '>
          <div>
            <img src='https://5.imimg.com/data5/CN/CI/MY-16102936/custom-tour-packages-services.png' className=''></img>
          </div>
          <div>
            <div>
              <p className='text-xl mt-7'>Embark on a personalized journey with our custom tour booking service! Whether you're seeking a relaxing getaway, an adventurous escape, or a cultural immersion, we tailor every aspect of your trip to suit your preferences. From curated itineraries and handpicked accommodations to exclusive activities and local experiences, our dedicated team ensures your travel dreams become a reality. Let us handle the details while you enjoy a seamless and unforgettable adventure, designed just for you. Book your custom tour today and discover the world, your way!</p>
            </div>
            <div className='mt-7'>
              {/* <Link href={"/View/Custom_book"} className='bg-red-700 text-white px-4 py-2 rounded-full'>Book Custom Tour</Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='box-border h-20  bg-neutral-300 rounded-full'>
          <div className='flex items-center justify-center pt-5'>
            <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4'></div>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-red-700'>Happy Feedbacks</h1>
            <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4'></div>
          </div>
        </div>
        <div className='mt-7'>
          {/* <Link href={"/View/cust_feed_form"} className='bg-red-700 text-white px-4 py-2 rounded-full'>Add Your Feedback</Link> */}
        </div>
      </div>

    </div>
  )
}
