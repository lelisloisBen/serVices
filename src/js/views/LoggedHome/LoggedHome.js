import React from 'react';

import styles from './LoggedHome.module.css';



const LoggedHome = () => {

    return (
        <>
            <section className={styles.main}>
                <div className="container">
                    <h1>You are Logged Now</h1>
                </div>    
            </section>
        </>
    );
};

export default LoggedHome;