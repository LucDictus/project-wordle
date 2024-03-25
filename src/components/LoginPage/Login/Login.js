import React from 'react';
import '../LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="login-page-content-container">
                <div className="login-page-title">
                    <h1 className="login-page-title-text">Log in jouw account</h1> 
                </div>

                <div className="login-page-form-container">
                    <form className="login-page-form">

                        <div className="login-page-input-container">
                            <label htmlFor="email">Email Adres</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="password">Wachtwoord</label>
                            <input type="password" id="password" name="password" required />
                        </div>

                        <div className="login-page-button-container">
                            <button className="login-page-button">
                                Log in
                                <Link to="/gamepage">Inloggen</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
