import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (

            <nav className={styles.navbar}>
                <h1>The Dojo Blog</h1>
                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>

    )
}

export default Navbar
