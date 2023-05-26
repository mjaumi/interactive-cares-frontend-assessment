import React from 'react';
import styles from './navbar.module.scss';
const Navbar = () => {

    // rendering navbar component here
    return (
        <header className={styles.ed_tech_header}>
            <nav className={styles.ed_tech_nav}>
                <div>
                    <h2>Ed Tech</h2>
                </div>
                <div className={styles.ed_tech_nav_user_div}>
                    <p>User Name</p>
                    <button className='ed-tech-button'>Log Out</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;