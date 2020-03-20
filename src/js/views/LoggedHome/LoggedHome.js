import React from 'react';

import styles from './LoggedHome.module.css';
import img from '../../../img/home/g7.jpg';



const LoggedHome = () => {

    return (
        <>
            <section className={styles.main}>
                <div className="container">
                    <h1>You are Logged Now</h1>

                    <div className="row">

                        
                        <div className={["col-md-4 col-sm-6", styles.cardMain].join(' ')}>
                            <div className="agileits-news-gridtext">
                                <div className="news-gridimg">
                                    <a href="single.html">
                                        <img src={img} className="img-responsive zoom-img" alt="" width="100%" />
                                    </a>
                                </div>
                                <div className="news-gridimgtext">
                                    <a href="single.html">
                                        <h4>home Maintenance</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin. </p>
                                </div>
                            </div>
                        </div>

                        <div className={["col-md-4 col-sm-6", styles.cardMain].join(' ')}>
                            <div className="agileits-news-gridtext">
                                <div className="news-gridimg">
                                    <a href="single.html">
                                        <img src={img} className="img-responsive zoom-img" alt="" width="100%" />
                                    </a>
                                </div>
                                <div className="news-gridimgtext">
                                    <a href="single.html">
                                        <h4>home Maintenance</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin. </p>
                                </div>
                            </div>
                        </div>

                        <div className={["col-md-4 col-sm-6", styles.cardMain].join(' ')}>
                            <div className="agileits-news-gridtext">
                                <div className="news-gridimg">
                                    <a href="single.html">
                                        <img src={img} className="img-responsive zoom-img" alt="" width="100%" />
                                    </a>
                                </div>
                                <div className="news-gridimgtext">
                                    <a href="single.html">
                                        <h4>home Maintenance</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>    
            </section>
        </>
    );
};

export default LoggedHome;