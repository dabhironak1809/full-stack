import React from 'react'

export default function com_alerts() {
  return (
    <div>
      <div>
        <h1 className='md:text-2xl text-blue-950'>Alerts</h1>
        <div className='flex space-x-2 md:text-sm'>
            <p className='text-gray-400'>Home</p>
            <p className='text-gray-400'>/</p>
            <p className='text-gray-400'>Components</p>
            <p className='text-gray-400'>/</p>
            <p className='text-gray-600'>Alerts</p>
        </div>
      </div>

      <div className='grid grid-cols-2 space-x-4 mx-4 mt-4'>
        <div className='bg-white rounded-md px-5 py-3 space-y-4'>
            <h1 className='text-blue-950 p-3 font-medium text-lg'>Default</h1>
            <div className='bg-blue-200   flex justify-between rounded-md'>
                <div>
                <h1 className='text-lg py-3 px-4 border '>A simple primary alert—check it out!</h1>
                </div>
                <div className='m-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>

            <div className='bg-neutral-200   flex justify-between rounded-md'>
                <div>
                <h1 className='text-lg py-3 px-4 border '>A simple secondary alert—check it out!</h1>
                </div>
                <div className='m-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>

            <div className='bg-green-100   flex justify-between rounded-md'>
                <div>
                <h1 className='text-lg py-3 px-4 border '>A simple success alert—check it out!</h1>
                </div>
                <div className='m-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>

            <div className='bg-pink-100   flex justify-between rounded-md'>
                <div>
                <h1 className='text-lg py-3 px-4 border '>A simple danger alert—check it out!</h1>
                </div>
                <div className='m-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>

        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
