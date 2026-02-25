import { useState } from 'react';
import Link from 'next/link';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={toggleDropdown} 
                className="text-[#092970] font-semibold hover:text-[#4154f1]">
                Forms
            </button>

            {isOpen && (
                <div className='ml-4'>
                    <a href="#" className="block px-4 py-2  text-sm text-[#092970] font-semibold hover:text-[#4154f1]">Form Elements</a>
                    <Link href="/View/multi_coul_form" className="block px-4 py-2  text-sm text-[#092970] font-semibold hover:text-[#4154f1]">Form Layouts</Link>
                    
                </div>
            )}
        </div>
    );
};

export default Dropdown;
