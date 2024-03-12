import React from 'react';
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
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Leaderboard</li></a>
                    <a href="#"><li>How to play</li></a>
                    <a href="#"><li>Account</li></a>
                    <a href="#"><li>Log out</li></a>
                </ul>
            </div>

            <div className="navigation-logo">
                <img src="/images/Logo.png" alt="Logo" />
            </div>
        </nav> 
    );
};

export default Navigation;