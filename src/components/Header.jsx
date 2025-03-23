import React from 'react'
import NavbarMobile from './NavbarMobile.jsx'
import HeaderOption from './HeaderOption.jsx'

function Header() {
  return (
    <div className='flex justify-between items-center mr-2 py-2 sm:ml-2 sm:mr-6 sm:py-2'>
        <NavbarMobile/>
        <HeaderOption/>
    </div>
  )
}

export default Header