



import React from 'react'
import slackLogo from "../assets/slack-logo.png"
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function HeaderOption() {

    return (
        <div className='flex justify-center items-center gap-x-2 sm:gap-x-10'>
            <img className='fixed left-8 sm:left-16 w-12 sm:w-24' src={slackLogo} alt="Slack Logo" />
            <ul className="lg:flex hidden">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
                    <div className='flex justify-start items-center'>
                        <span>Product</span>
                        <IoMdArrowDropdown />
                    </div>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Enterprise</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">resources</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pricing</li>
            </ul>
            <IoIosSearch className='text-xl sm:text-3xl' />
            <button className='text-sm sm:text-base'>Sign in</button>
            <div className='flex gap-x-1 sm:gap-x-6'>
                <button className="border-[1px] border-solid border=[#610b5b] bg-white px-[4px] py-[2px] sm:px-4 sm:py-2 rounded-sm text-sm sm:text-base">TALK TO SALES</button>
                <button className="bg-[#610b5b] text-white px-[4px] py-[2px] sm:px-4 sm:py-2 rounded-sm text-sm sm:text-base">TRY FOR FREE</button>
            </div>
        </div>
    )
}

export default HeaderOption