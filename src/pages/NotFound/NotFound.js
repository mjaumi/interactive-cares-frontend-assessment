import React from 'react';
import styles from './notFound.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // rendering not found (404) page here
    return (
        <section className={styles.ed_tech_not_found_section}>
            <div className={styles.ed_tech_not_found_container}>
                <h1>404</h1>
                <p>Opps... Looks like the you are looking for does not exists!!</p>
                <button onClick={() => navigate('/')} className='ed-tech-button'>Return To Homepage</button>
            </div>
        </section>
    );
};

export default NotFound;