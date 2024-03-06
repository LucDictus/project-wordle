import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';

function Startpage() {
    // create a new date object
    const currentDate = new Date();

    // format the date to a Dutch string
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('nl-NL', options);

    return (
        <div className="startpage-container">
            <div className="startpage-content-container">
                <div className="startpage-title">Hi Warrior</div>
                <div className="startpage-subtitle">
                    Raad een 5-letterwoord. <br></br> 
                    Je hebt 6 kansen.
                </div>

                <div className="startpage-links-container">
                    <div className="startpage-leaderboard-link">
                        <Link to="/login">Inloggen</Link>
                    </div>
                    <div className="startpage-login-link">
                        <Link to="/registrate">Registreren</Link>
                    </div>
                </div>

                <div className="startpage-footer">
                    <div className="startpage-footer-text">{formattedDate}</div>
                    <div className="startpage-footer-text">Made by Anthony, Alozie & Luc</div>
                </div>
            </div>
        </div>
    );
}

export default Startpage;
