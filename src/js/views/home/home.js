import React from 'react';
import styles from './home.module.css';

import bg1 from '../../../img/home/bg1.jpg';
import bg2 from '../../../img/home/bg2.jpg';
import bg3 from '../../../img/home/bg3.jpg';

const Home = () => {

    return (
        <div className={styles.main}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bg1} className="d-block w-100" alt="bg1" />
                        <div className={["d-none d-md-block", styles.carouselCaption].join(' ')}>
                            <h1>One Stop Home Services</h1>
                            <p>Let us do it for you.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bg2} className="d-block w-100" alt="bg2" />
                    </div>
                    <div className="carousel-item">
                        <img src={bg3} className="d-block w-100" alt="bg3" />
                    </div>
                </div>
            </div>

            <div className={styles.bannerServices}>
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>improvement</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="fab fa-gg" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>cleaning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="far fa-check-square" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>maintenance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="fas fa-cog" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">

                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>repair</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="fab fa-yelp" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>improvement</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="fab fa-gg" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.bannerSub1}>
                                <h3>cleaning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                <span className="far fa-check-square" aria-hidden="true"></span>
                                <div className={styles.bannerBtn}>
                                    <a href="about.html">view more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
		    </div>

            <div className={styles.aboutMain}>
                <div className="row">
                    <div className={["col-md-4", styles.aboutLeft].join(' ')}>
                        <div className={styles.leftMain}>
                            <h4>Why</h4>
                            <div className={styles.leftMainSub}>
                                <span>c</span>hoose 
                                &nbsp;
                                <span>u</span>s?
                            </div>
                        </div>
                    </div>
                    <div className={["col-md-8", styles.aboutRight].join(' ')}>
                        <h4>One Stop Solution for your Complete Home Maintenance</h4>
                        <div className="row p-3">
                            <div className="col-md-1">
                                <span className={["fas fa-check", styles.aboutIcon].join(' ')}></span> 
                            </div>
                            <div className="col-md-11">
                                <span className={styles.aboutIconText}>Vision</span>
                                <br/>
                                Consectetur adipiscing elit estibulum nibh urna
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col-md-1">
                                <span className={["fas fa-book", styles.aboutIcon].join(' ')}></span>
                            </div>
                            <div className="col-md-11">
                                <span className={styles.aboutIconText}>Affordable</span>
                                <br/>
                                Consectetur adipiscing elit estibulum nibh urna
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col-md-1">
                                <span className={["far fa-image", styles.aboutIcon].join(' ')}></span> 
                            </div>
                            <div className="col-md-11">
                                <span className={styles.aboutIconText}>Quality</span>
                                <br/>
                                Consectetur adipiscing elit estibulum nibh urna
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col-md-1">
                                <span className={["fas fa-briefcase", styles.aboutIcon].join(' ')}></span>
                            </div>
                            <div className="col-md-11">
                                <span className={styles.aboutIconText}>24*7 Support</span>
                                <br/>
                                Consectetur adipiscing elit estibulum nibh urna
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className={["col-md-6", styles.section3Left].join(' ')}>
                        <img src="" alt=""/>
                    </div>
                    <div className={["col-md-6", styles.section3Right].join(' ')}>
                        <h4>Service You Can Trust</h4> 
                        <p>Protect All Your Home Appliances & Systems.</p>
                        <button className="myBtn">view all services</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;