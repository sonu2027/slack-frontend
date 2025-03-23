import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

function Cookies() {

  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen);
  };

  return (
    <div className={` px-4 py-4 fixed z-10 bottom-2 w-96 right-2 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      {
        isOpen && <button className="flex w-full justify-end p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}>
          <RxCross2 className='text-2xl font-bold' />
        </button>
      }
      <div className='flex flex-col justify-center items-center gap-y-6'>
        <div >
          <span className='font-medium'>This website uses cookies to enhance user experience and to analyze performance and traffic on our websites. We also share information about your use of our site with social media, advertsing and analutics platform.</span>
          <a className='text-blue-500 underline font-medium' href="#">More Info</a>
        </div>
        <div>
          <button onClick={toggleMenu} className='bg-[#610b5b] w-full px-2 py-2 text-white rounded-sm my-2'>ACCEPT ALL COOKIES</button>
          <button onClick={toggleMenu} className='w-full px-2 py-2 border-2 border-solid border-[#610b5b] rounded-sm'>Don't accept cookes</button>
        </div>
      </div>
    </div>
  )
}

export default Cookies