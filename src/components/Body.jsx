import React from 'react'
import img from "../assets/img.png"
import googleLogo from "../assets/google-logo.webp"

function Body() {
  return (
    <div className='sm:flex sm:justify-between sm:items-center mr-2 sm:ml-2 sm:mr-6'>
      <div className='flex flex-col gap-y-3'>
        <p className='text-2xl sm:text-4xl font-bold'>Slack is where the future works</p>
        <div>
          <p className='font-bold'>Transform the way you work with one place for</p>
          <p className='font-bold'>everyone and everything you need to get stuff done.</p>
        </div>
        <div className='flex justify-start items-center gap-x-1'>
          <button className='bg-[#610b5b] text-white px-2 py-1 rounded-sm'>TRY FOR FREE</button>
          <button className='bg-blue-500 text-white px-1 py-1 rounded-sm flex justify-between gap-x-1 items-center'>
            <img className='bg-white w-6 rounded-sm' src={googleLogo} alt="" />
            <span>SIGN UP WITH GOOGLE</span>
          </button>
        </div>
      </div>
      <div>
        <img className='w-96' src={img} alt="" />
      </div>
    </div>
  )
}

export default Body