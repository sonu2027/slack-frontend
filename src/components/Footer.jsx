import React from 'react'
import img2 from "../assets/img2.png"
import googleLogo from "../assets/google-logo.webp"

function Footer() {
    return (
        <div className='flex gap-y-8 flex-col sm:flex-row sm:justify-between sm:items-center mr-2 sm:ml-2 sm:mr-6 mt-8 pb-8'>
            <div>
                <img className='w-96' src={img2} alt="" />
            </div>
            <div className='flex flex-col gap-y-3 justify-center items-center sm:items-start'>
                <div>
                    <p className='text-2xl sm:text-3xl font-bold'>Now is your moment to build a</p>
                    <p className='text-2xl sm:text-4xl font-bold'>better tomorrow</p>
                </div>
                <div>
                    <p className='font-bold hidden sm:block'>We've seen what the future can be. Now it's time to decide</p>
                    <p className='font-bold hidden sm:block'>what it will be.</p>
                    <p className='sm:hidden text-center'>We've seen what the future can be. Now it's time to decide what it will be.</p>
                </div>
                <button className='border-[1px] border-solid border-[#610b5b] text-[#610b5b] px-2 py-1 rounded-sm w-48'>WATCH VIDEO</button>
            </div>
        </div>
    )
}

export default Footer