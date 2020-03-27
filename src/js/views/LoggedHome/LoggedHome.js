import React from 'react';

import styles from './LoggedHome.module.css';
import img from '../../../img/loggedHome/girl1.jpg';
import img2 from '../../../img/loggedHome/girl2.jpg';
import img3 from '../../../img/loggedHome/girl3.jpg';
import img4 from '../../../img/loggedHome/girl4.jpg';



const LoggedHome = () => {

    return (
        <>
            <section className={styles.main}>
                <div className="container mx-auto">

                        <div className="card mb-3">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mila</h5>
                                <p className="card-text">This is a card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <i className="fas fa-fist-raised"></i>$50-30min
                                        &nbsp;/&nbsp;
                                        <i className="far fa-surprise"></i> $100-30min
                                        &nbsp;/&nbsp;
                                        <i className="fas fa-smile"></i>$300-1h
                                    </small>
                                    <br/>
                                    <small className="text-muted">
                                        <i className="fab fa-instagram"></i>
                                        &nbsp;
                                        Mila
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Anastasia</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <i className="fas fa-fist-raised"></i>$50-30min
                                        &nbsp;/&nbsp;
                                        <i className="far fa-surprise"></i> $100-30min
                                        &nbsp;/&nbsp;
                                        <i className="fas fa-smile"></i>$300-1h
                                    </small>
                                    <br/>
                                    <small className="text-muted">
                                        <i className="fab fa-instagram"></i>
                                        &nbsp;
                                        Anastasia
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lia</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <i className="fas fa-fist-raised"></i>$50-30min
                                        &nbsp;/&nbsp;
                                        <i className="far fa-surprise"></i> $100-30min
                                        &nbsp;/&nbsp;
                                        <i className="fas fa-smile"></i>$300-1h
                                    </small>
                                    <br/>
                                    <small className="text-muted">
                                        <i className="fab fa-instagram"></i>
                                        &nbsp;
                                        Lia
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Nina</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <i className="fas fa-fist-raised"></i>$50-30min
                                        &nbsp;/&nbsp;
                                        <i className="far fa-surprise"></i> $100-30min
                                        &nbsp;/&nbsp;
                                        <i className="fas fa-smile"></i>$300-1h
                                    </small>
                                    <br/>
                                    <small className="text-muted">
                                        <i className="fab fa-instagram"></i>
                                        &nbsp;
                                        Nina
                                    </small>
                                </p>
                            </div>
                        </div>
                        
                </div>    
            </section>
        </>
    );
};

export default LoggedHome;