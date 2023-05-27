import React from 'react';
import styles from './navbar.module.scss';
import { FiLogOut } from 'react-icons/fi';
const Navbar = () => {

    // rendering navbar component here
    return (
        <header className={styles.ed_tech_header}>
            <nav className={`container ${styles.ed_tech_nav}`}>
                <div>
                    <h2 className={styles.ed_tech_nav_logo}>Ed <span>Tech</span></h2>
                </div>
                <div className={styles.ed_tech_nav_user_div}>
                    <p>User Name</p>
                    <button className='ed-tech-button'>
                        <FiLogOut className='mr-10' />
                        Log Out
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;