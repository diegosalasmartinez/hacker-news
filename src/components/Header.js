import React from 'react'
import logo from '../assets/hacker-news.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        {/* <img src={logo} className='header-logo' alt='Logo'/> */}
        <span className="header-logo">HACKER NEWS</span>
      </div>
    </div>
  )
}

export default Header
