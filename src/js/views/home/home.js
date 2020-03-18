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
                        here
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;