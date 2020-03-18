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
        </div>
    );
};

export default Home;