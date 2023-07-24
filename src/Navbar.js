import React from 'react'
import styles from '../src/styles/Navbar.module.css'
// import logo from './../public/Logo.svg'
// import { a } from "react-router-dom";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}>
                    <img src={"/Logo.svg"} alt='This is a logo' className={styles.logo} />
                </div>
                <div className={styles.navItemsDiv}>
                    <ul className={styles.navItems}>
                        <li className='px-4 py-4'><a href={"/"}>Home</a></li>
                        <li className='px-4 py-4'><a href={"/"}>About</a></li>
                        <li className='px-4 py-4'><a href={"/"}>Menu</a></li>
                        <li className='px-4 py-4'><a href={"/"}>Reservations</a></li>
                        <li className='px-4 py-4'><a href={"/"}>Order Online</a></li>
                        <li className='px-4 py-4'><a href={"/"}>Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
