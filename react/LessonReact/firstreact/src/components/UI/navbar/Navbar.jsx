import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.navbar_links}>
      <Link to="/about">О приложении</Link>
      <Link to="/singlepost">Страница с постами</Link>
      {/* <Link to="/allposts">Страница чатов</Link> */}
      <Link to="/profile">Профиль</Link>
    </div>
  </div>
  )
}

export default Navbar