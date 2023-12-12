import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import logo from '../assets/logo.svg'
import './Nav.css'



const Nav = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className='navContainer' >
      <div className='logo-bar' >
        <img src={logo} />
        <div className='barr' >
        <FaBars onClick={() => setOpen(true)} />
        </div> 
       <ul className='listItem' >
       <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Category</li>
       </ul>
        
      </div>

      {open && (
        <div className='ul-close' >
          <IoIosClose className='close' onClick={() => setOpen(false)} />
          <ul>
            <li className='home' >Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Category</li>
          </ul>
        </div>
        )}


    </div>
  )
}

export default Nav