import React, { useContext, useState } from 'react';
import TweetPopup from '../tweet/Tweet';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import home from '../../assets/images/home.svg';
import dm from '../../assets/images/direct-message.svg';
import profile from '../../assets/images/profile.svg';
import notifications from '../../assets/images/notifications.svg';
import tweet from '../../assets/images/tweet.svg';
import logout from '../../assets/images/logout.svg';

import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const { signOut } = useContext(AuthContext);

    const handleLogout = () => {
        // Perform logout logic using AuthProvider
        signOut();

        // Redirect to the login page
        navigate('/login');
    };

    // State to control the visibility of the tweet popup
    const [showTweetPopup, setShowTweetPopup] = useState(false);

    // Function to toggle the tweet popup visibility
    const toggleTweetPopup = () => {
        setShowTweetPopup(!showTweetPopup);
    };

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <div className="icon-container" onClick={() => navigate('/feed')}>
                        <img src={home} alt="Home" style={{ width: '38px', height: '38px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => navigate('/notifications')}>
                        <img src={notifications} alt="Notifications" style={{ width: '50px', height: '50px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => navigate('/direct-messages')}>
                        <img src={dm} alt="DM" style={{ width: '40px', height: '40px'}}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => navigate('/profile')}>
                        <img src={profile} alt="Profile" style={{ width: '36px', height: '36px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => toggleTweetPopup()}>
                        <img src={tweet} alt="Tweet" style={{ width: '40px', height: '40px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={ () => handleLogout()}>
                        <img src={logout} alt="Logout" style={{ width: '35px', height: '35px' }}/>
                    </div>
                </li>

            </ul>

            {showTweetPopup && <TweetPopup onClose={toggleTweetPopup} />}
        </nav>
    );
}

export default Navbar;