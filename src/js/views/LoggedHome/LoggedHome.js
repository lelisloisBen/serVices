import React from 'react';

import styles from './LoggedHome.module.css';
import img from '../../../img/home/g7.jpg';



const LoggedHome = () => {

    return (
        <>
            <section className={styles.main}>
                <div className="container mx-auto">

                        <div class="card mb-3">
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        
                </div>    
            </section>
        </>
    );
};

export default LoggedHome;