import React from 'react';
import styles from './loading.module.scss';
import { Bars } from 'react-loading-icons';

const Loading = () => {
    // rendering loading component here
    return (
        <section className={styles.ed_tech_loading_section}>
            <div>
                <Bars stroke='#2b91ce' fill='#2b91ce' height={100} />
            </div>
        </section>
    );
};

export default Loading;