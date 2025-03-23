import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

function HI() {

    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen);
    };

    return (
        <div className={` px-4 py-4 fixed z-20 bottom-1 w-96 right-2 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} flex justify-center gap-x-2`}>
            <RxCross2 onClick={toggleMenu} className='text-2xl font-bold bg-gray-600 rounded-full p-1 text-gray-100 ' />
            <div className=' bg-white border font-medium border-gray-200 rounded-lg shadow-lg px-2 py-1'>
                <p>Hey there,👋 want to know</p>
                <p>something cool</p>
            </div>
            <div className='bg-[#610b5b] px-3 mt-[6px] text-3xl rounded-sm py-[4px] flex justify-between items-center' >👋</div>
        </div>
    )
}

export default HI