import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../../assets/images/home.svg';
import dm from '../../assets/images/direct-message.svg';
import profile from '../../assets/images/profile.svg';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <div className="icon-container" onClick={() => navigate('/feed')}>
                        <img src={home} alt="Home" style={{ width: '40px', height: '40px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => navigate('/direct-messages')}>
                        <img src={dm} alt="DM" style={{ width: '40px', height: '40px' }}/>
                    </div>
                </li>
                <li>
                    <div className="icon-container" onClick={() => navigate('/profile')}>
                        <img src={profile} alt="Profile" style={{ width: '40px', height: '40px' }}/>
                    </div>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;