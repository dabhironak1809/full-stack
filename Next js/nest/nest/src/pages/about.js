import Link from 'next/link'
import React from 'react'

export default function about() {
    return (

        <div className='flex flex-col gap-10 text-center mt-10'>

            <div className='bg-purple-300 py-10 text-black'>About</div>
            <Link href={"/"} className='bg-indigo-400 w-20 p-2 text-center rounded-full mx-auto'>Back</Link>
        </div>
    )
}
