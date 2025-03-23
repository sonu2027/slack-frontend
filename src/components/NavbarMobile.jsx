import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false)

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen);
  };

  const handleOpenProduct = () => {
    setOpenProduct(!openProduct)
  }

  window.addEventListener("click", () => {
    if(isOpen){
      setIsOpen(!isOpen);
    }
  })

  return (
    <div className="relative">

      {
        !isOpen && 
        <>
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>
        <p className='hidden lg:block text-[#F5F0EC]'>.</p>
        </>
      }
      <div onClick={(e) => e.stopPropagation()}
        className={`absolute z-10 left-0 w-48 h-[100vh] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >

        {
          isOpen && <button className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}>
            <RxCross2 />
          </button>
        }
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
            <div className='flex justify-start items-center'>
              <span>Product</span>
              <IoMdArrowDropdown onClick={handleOpenProduct} />
            </div>
            {
              openProduct && <ul className='flex flex-col justify-center items-start'>
                <li>Shirt</li>
                <li>Apple</li>
                <li>Table</li>
                <li>Kent</li>
              </ul>
            }
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Enterprise</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">resources</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pricing</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile