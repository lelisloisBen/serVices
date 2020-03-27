import React, { useState } from 'react';
import styles from './Profile.module.css';

const Profile = () => {

    const [username, setUsername] = useState('');
    const [instagram, setInstagram] = useState('');
    const [description, setDescription] = useState('');

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>

        </div>
    );
};

export default Profile; 