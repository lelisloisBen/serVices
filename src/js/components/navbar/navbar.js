import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const JobTrialNavbar = () => {
    
    let tokenAuth = localStorage.getItem('token');
    let firstname = localStorage.getItem('firstname');
    let lastname = localStorage.getItem('lastname');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <ul className="nav navbar-nav navbar-left mobile">
                    <Link className={styles.links} to="/">
                        HOME
                    </Link>
                    <Link className={styles.links} to="/">
                        ABOUT
                    </Link>
                    <Link className={styles.links} to="/">
                        SERVICE
                    </Link>
                    <Link className={styles.links} to="/">
                        CONTACT
                    </Link>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            <Link to="/" className={styles.links}> 
                                Home
                            </Link>
                            <Link to="/login" className={styles.links}> 
                                LogIn
                            </Link>
                        </li>
                    : 
                        <li>
                            <div className="btn-group">
                                <button className={["dropdown-toggle", styles.dropBtn].join(' ')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {firstname} {lastname}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/" >
                                        <i class="fas fa-home"></i> Home
                                    </Link>
                                    <Link className="dropdown-item" to="/register" >
                                        <i class="fas fa-plus-square"></i> Customer
                                    </Link>
                                    <Link className="dropdown-item" to="/profile" >
                                        my profile
                                    </Link>
                                    <div class="dropdown-divider"></div>
                                    <button 
                                        className="dropdown-item" 
                                        onClick={async () => {
                                            localStorage.clear();
                                            window.location.href = "/";
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default JobTrialNavbar;