import React from 'react'
import Header from './components/Header.jsx'
import ToDo from './components/ToDo.jsx'
import Body from "./components/Body.jsx"
import CompanyLogo from './components/CompanyLogo.jsx'
import Footer from './components/Footer.jsx'
import Cookies from './components/Cookies.jsx'
import HI from './components/HI.jsx'

function App() {
  return (
    <div className='bg-[#F5F0EC]'>
      <Header/>
      <ToDo/>
      <Body/>
      <CompanyLogo/>
      <Footer/>
      <Cookies/>
      <HI/>
    </div>
  )
}

export default App