import './header.css'
import data from './data.js'
import HeaderImage from '../../assets/header.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos='fade-in'>
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos='fade-up'>Kevin Espina</h3>
        <p data-aos='fade-up'>
        I am a full stack developer with proficiency in NextJs, React, React-Native, Node, and all things JS. 
        I am passionate about writing clean, efficient and professional code. 
        I have a good understanding of Data Structures, Algorithms and UI Design. Always curious about new tech.
        </p>
        <div className="header__cta" data-aos='fade-up'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => 
              <a href="" key={item.id} target={'_blank'} rel='noopener noreferrer' >{item.icon}</a>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header