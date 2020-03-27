import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={["container", styles.main].join(' ')}>
            <h1 className="text-center" >username</h1>

            <label htmlFor="username">Username</label>
            <br/>
            &nbsp;
            <input 
                type="text" 
                name="name" 
                id="username"
                placeholder="username"
            />
        </div>
    );
};

export default Profile; 