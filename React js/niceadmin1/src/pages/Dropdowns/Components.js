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
                Components
            </button>

            {isOpen && (
                <div className='ml-4'>
                    <a href="#" className="block px-4 py-2  text-sm text-[#092970] font-semibold hover:text-[#4154f1]">Alerts</a>
                    <a href="#" className="block px-4 py-2  text-sm text-[#092970] font-semibold hover:text-[#4154f1]">Accordion</a>
                    
                </div>
            )}
        </div>
    );
};

export default Dropdown;
