import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav id="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                    <li><Link to="/gamepage">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/how-to-play">How to play</Link></li>
                    <li><Link to="/">Log out</Link></li>
                </ul>
            </div>

            <div className="navigation-logo">
                <img src="/images/Logo.png" alt="Logo" />
            </div>
        </nav> 
    );
};

export default Navigation;
