import React from 'react'
import styles from './../styles/Navbar.module.css'
// import logo from './../public/Logo.svg'
// import { a } from "react-router-dom";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}>
                    <Link to={"/"}><img src={"/Logo.svg"} alt='This is a logo' className={styles.logo} /></Link>
                </div>
                <div className={styles.navItemsDiv}>
                    <ul className={styles.navItems}>
                        <li className='px-4 py-4'><Link to={"/"}>Home</Link></li>
                        <li className='px-4 py-4'><Link to={"/about"}>About</Link></li>
                        <li className='px-4 py-4'><Link to={"/menu"}>Menu</Link></li>
                        <li className='px-4 py-4'><Link to={"/reservation"}>Reservations</Link></li>
                        <li className='px-4 py-4'><Link to={"/order-online"}>Order Online</Link></li>
                        <li className='px-4 py-4'><Link to={"/login"}>Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
