import './navbar.css'
import Logo from '../../assets/logo.jpg'
import data from './data'
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
// import {IoIosColorPalette} from 'react-icons/io'

const Navbar = () => {
  return (
    <nav id="Navbar">
      <div className='container nav__container' >
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => 
              <li key={item.id}>
                <a href={item.link}>
                  {item.title}
                </a>
              </li>
            )
          }
        </ul>
        <button id='theme__icon'> <AiOutlineHome/> </button>
        {/* <button id='theme__icon'> <IoIosColorPalette/> </button> */}
      </div>
    </nav>
  )
}

export default Navbar