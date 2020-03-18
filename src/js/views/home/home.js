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
                        <div className={["col-md-4", styles.bannerBox1].join(' ')}>
                            <div className="form-text">
                                <h3>Looking for a Handyman?</h3>
                                <p>We solve your Home repair needs!</p>
                                <img src="images/f1.png" alt="" />
                            </div>
                            <form action="#" method="post" className="banner_form">
                                <div className="sec-left">
                                    <label className="contact-form-text">Name</label>
                                    <input placeholder="your name " name="first name" type="text" required="" />
                                </div>
                                <div className="sec-right">
                                    <label className="contact-form-text">Email</label>
                                    <input placeholder="xxx@xx.com " name="first name" type="email" required="" />
                                </div>
                                <div className="sec-left">
                                    <label className="contact-form-text">Mobile no.</label>
                                    <input placeholder=" XXXXXX" name="first name" type="text" required="" />
                                </div>
                                <div className="form-tx">
                                    <label className="contact-form-text">Address</label>
                                    <textarea placeholder="your address" required=""></textarea>
                                </div>
                                <div className="form-select sec-right">
                                    <label className="contact-form-text">Select Service</label>
                                    <select>
                                        <option value="0">---- SELECT ----</option>
                                        <option value="1">Electrical Service</option>
                                        <option value="2">Plumbing Service</option>
                                        <option value="3">Painting</option>
                                        <option value="4">Carpentry</option>
                                        <option value="5">Gardening</option>
                                        <option value="6">Other</option>
                                    </select>
                                </div>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="col-md-8 banner-btm-grid2">
                            <div className="col-md-4 banner-grid2">
                                <div className="banner-subg1">
                                    <h3>maintenance</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span className="fa fa-cog" aria-hidden="true"></span>
                                    <div className="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                                <div className="banner-subg1">
                                    <h3>cleaning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span className="fa fa-check-square-o" aria-hidden="true"></span>
                                    <div className="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 banner-grid2">
                                <div className="banner-subg1">
                                    <h3>repair</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span className="fa fa-yelp" aria-hidden="true"></span>
                                    <div className="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                                <div className="banner-subg1">
                                    <h3>improvement</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span className="fa fa-gg" aria-hidden="true"></span>
                                    <div className="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
		    </div>

        </div>
    );
};

export default Home;