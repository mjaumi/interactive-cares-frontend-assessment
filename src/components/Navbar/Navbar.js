import React from 'react';
import styles from './navbar.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // integration of react-firebase hooks here
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // handler function to handle user logout
    const userLogoutHandler = async () => {

        await signOut();
        navigate('/');
    }

    // rendering navbar component here
    return (
        <header className={styles.ed_tech_header}>
            <nav className={`container ${styles.ed_tech_nav}`}>
                <div>
                    <h2 className={styles.ed_tech_nav_logo}>Ed <span>Tech</span></h2>
                </div>
                <div className={styles.ed_tech_nav_user_div}>
                    <p>{user?.displayName.split(' ')[1]}</p>
                    <button onClick={userLogoutHandler} className='ed-tech-button'>
                        <FiLogOut className='mr-10' />
                        Log Out
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;