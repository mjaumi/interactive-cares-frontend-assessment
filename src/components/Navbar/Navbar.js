import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Navbar = () => {
    // integration of react-firebase hooks here
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // integration of react hooks here
    const [isLoading, setIsLoading] = useState(false);

    // handler function to handle user logout
    const userLogoutHandler = async () => {
        setIsLoading(true);

        const success = await signOut();

        setIsLoading(false);

        if (success) {
            toast.success('Logout Successful!!', {
                toastId: 'logout success',
            });
            navigate('/');
        } else {
            toast.success('Logout Failed!!', {
                toastId: 'logout fail',
            });
        }
    }

    // rendering navbar component here
    return (
        <header className={styles.ed_tech_header}>
            <nav className={`container ${styles.ed_tech_nav}`}>
                <div>
                    <h2 className='ed-tech-logo'>Ed <span>Tech</span></h2>
                </div>
                <div className={styles.ed_tech_nav_user_div}>
                    <p>{user?.displayName.split(' ')[1]}</p>
                    <button onClick={userLogoutHandler} className='ed-tech-button'>
                        <FiLogOut className='mr-10' />
                        Log Out
                    </button>
                </div>
            </nav>
            {
                isLoading && <Loading />
            }
        </header>
    );
};

export default Navbar;