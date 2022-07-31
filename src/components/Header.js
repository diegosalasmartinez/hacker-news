import React from 'react'
import hackerNews from '../assets/hacker-news.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <span className="header-logo">
          <img src={hackerNews} alt="Logo" height="30px" width="240px" />
          by Diego Salas
        </span>
      </div>
    </div>
  )
}

export default Header
