import './floating-nav.css'
import data from './data'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'contact']} currentClassName='active'>
        {
          data.map(item => 
            <Nav key={item.id} item={item} />
          )
        }
      </Scrollspy>

    </ul>
  )
}

export default FloatingNav