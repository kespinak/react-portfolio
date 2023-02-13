import React from 'react'

const Nav = ({className, item}) => {
  return (
    <li key={item.id} className={className}>
      <a href={item.link}>
        {item.icon}
      </a>

    </li>
  )
}

export default Nav