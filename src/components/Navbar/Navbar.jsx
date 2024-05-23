import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li><a href="#about"></a>About</li>
                <li><a href="#Experience"></a>Experience</li>
                <li><a href="#Projects"></a>Projects</li>
                <li><a href="#contact"></a>Contact</li>
            </ul>
        </div>
    </nav>
  )
}
