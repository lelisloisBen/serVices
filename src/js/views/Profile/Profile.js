import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={["container", styles.main].join(' ')}>
            <h1 className="text-center" >username</h1>
        
            <label htmlFor="username">Username:</label>
            <br/>
            &nbsp;
            <input 
                type="text" 
                name="name" 
                id="username"
                placeholder="username"
            />

            <br/>

            <label htmlFor="instagram">Instagram:</label>
            <br/>
            &nbsp;
            <input 
                type="text" 
                name="instagram" 
                id="instagram"
                placeholder="instagram"
            />

            <br/>

            <label htmlFor="prices">Prices:</label>
            <br/>
            <small class="text-muted">
                <i class="fas fa-fist-raised"></i>$50-30min
                &nbsp;/&nbsp;
                <i class="far fa-surprise"></i> $100-30min
                &nbsp;/&nbsp;
                <i class="fas fa-smile"></i>$300-1h
            </small>

            <br/>

            <label htmlFor="description">Description:</label>
            <br/>
            &nbsp;
            <textarea 
                name="description" 
                id="description" 
                cols="30" 
                rows="10"
                placeholder="description"
            >
            </textarea>

        </div>
    );
};

export default Profile; 