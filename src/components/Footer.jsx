import React from 'react'
import img2 from "../assets/img2.png"
import googleLogo from "../assets/google-logo.webp"

function Footer() {
    return (
        <div className='sm:flex sm:justify-between sm:items-center mr-2 sm:ml-2 sm:mr-6'>
            <div>
                <img className='w-96' src={img2} alt="" />
            </div>
            <div className='flex flex-col gap-y-3'>
                <div>
                    <p className='text-2xl sm:text-4xl font-bold'>Now is your moment to build a</p>
                    <p className='text-2xl sm:text-4xl font-bold'>better tomorrow</p>
                </div>
                <div>
                    <p className='font-bold'>We've seen what the future can be. Now it's time to decide</p>
                    <p className='font-bold'>What it will be.</p>
                </div>
                <button className='border-[1px] border-solid border-[#610b5b] text-[#610b5b] px-2 py-1 rounded-sm'>WATCH VIDEO</button>
            </div>
        </div>
    )
}

export default Footer