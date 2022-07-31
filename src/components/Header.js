import React from 'react'
import hackerNews from '../assets/hacker-news.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <img src={hackerNews} alt="Logo" height="30px" width="240px" />
          <span>by Diego Salas</span>
        </div>
      </div>
    </div>
  )
}

export default Header
