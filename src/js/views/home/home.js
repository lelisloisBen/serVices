import React from 'react';
import styles from './home.module.css';

import bg1 from '../../../img/home/bg1.jpg';
import bg2 from '../../../img/home/bg2.jpg';
import bg3 from '../../../img/home/bg3.jpg';

const Home = () => {
    return (
        <div className={styles.main}>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bg1} class="d-block w-100" alt="bg1" />
                    </div>
                    <div class="carousel-item">
                        <img src={bg2} class="d-block w-100" alt="bg2" />
                    </div>
                    <div class="carousel-item">
                        <img src={bg3} class="d-block w-100" alt="bg3" />
                    </div>
                </div>
            </div>

            <div class={styles.bannerServices}>
                <div class="container">
                    <div class="banner-bottom-main">
                        <div class="col-md-4 banner-btmg1">

                            <div class="form-text">
                                <h3>Looking for a Handyman?</h3>
                                <p>We solve your Home repair needs!</p>
                                <img src="images/f1.png" alt="" />
                            </div>
                            <form action="#" method="post" class="banner_form">
                                <div class="sec-left">
                                    <label class="contact-form-text">Name</label>
                                    <input placeholder="your name " name="first name" type="text" required="" />
                                </div>
                                <div class="sec-right">
                                    <label class="contact-form-text">Email</label>
                                    <input placeholder="xxx@xx.com " name="first name" type="email" required="" />
                                </div>
                                <div class="sec-left">
                                    <label class="contact-form-text">Mobile no.</label>
                                    <input placeholder=" XXXXXX" name="first name" type="text" required="" />
                                </div>
                                <div class="form-tx">
                                    <label class="contact-form-text">Address</label>
                                    <textarea placeholder="your address" required=""></textarea>
                                </div>
                                <div class="form-select sec-right">
                                    <label class="contact-form-text">Select Service</label>
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
                        <div class="col-md-8 banner-btm-grid2">
                            <div class="col-md-4 banner-grid2">
                                <div class="banner-subg1">
                                    <h3>maintenance</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span class="fa fa-cog" aria-hidden="true"></span>
                                    <div class="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                                <div class="banner-subg1">
                                    <h3>cleaning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span class="fa fa-check-square-o" aria-hidden="true"></span>
                                    <div class="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4 banner-grid2">
                                <div class="banner-subg1">
                                    <h3>repair</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span class="fa fa-yelp" aria-hidden="true"></span>
                                    <div class="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                                <div class="banner-subg1">
                                    <h3>improvement</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.</p>
                                    <span class="fa fa-gg" aria-hidden="true"></span>
                                    <div class="read-btn">
                                        <a href="about.html">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
		    </div>

        </div>
    );
};

export default Home;