import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar_links">
      <Link to="/about">О приложении</Link>
      <Link to="/posts">Страница с постами</Link>
      <Link to="/chats">Страница чатов</Link>
    </div>
  </div>
  )
}

export default Navbar