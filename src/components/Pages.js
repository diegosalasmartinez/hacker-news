import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Pages = () => {
  const location = useLocation()
  const { pathname } = location
  
  return (
    <div className="container">
      <div className="page-selector">
        <Link to="/" className={pathname === '/' ? 'selected' : ''}>
          All
        </Link>
        <Link to="/favs" className={pathname === '/favs' ? 'selected' : ''}>
          My faves
        </Link>
      </div>
    </div>
  )
}

export default Pages
