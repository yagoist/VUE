import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <p>Please login</p>
      <NavLink to={'/login'}>
        Login
      </NavLink>
      <NavLink to="/about">О приложении</NavLink>
        {/* <Link to="/singlepost">Страница с постами</Link> */}
        {/* <Link to="/allposts">Страница чатов</Link> */}
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/chatslist">Список чатов</NavLink>
    </header>
  )
}

export default Header