import React from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdowns/Forms'
import Component from '../Dropdowns/Components'



export default function Sidebar1() {
  return (
    <div className='p-4 space-y-4 ml-4'>
        
            <div className=''>
                <Link href={"/View/Dashbord"} class="flex items-center space-x-3" className='text-[#092970] font-semibold hover:text-[#4154f1]'>
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                </svg>
                    <span className="">Dashboard</span>
                    
                </Link>
            </div>
            <div>
                <Component/>
            </div>
            <div className=''>
                <Dropdown/>
            </div>
        
    </div>
  )
}
