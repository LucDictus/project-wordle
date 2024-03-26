import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials, navigate) {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const token = await response.json();
        sessionStorage.setItem('token', JSON.stringify(token));
        navigate('/gamepage');
    } catch (error) {
        console.error('Error logging in:', error);
        // Handle error
    }
}

export default function LoginPage({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({ username, password }, navigate);
        setToken(true); // Update token state
    }

    return (
        <div className="login-page-container">
            <div className="login-page-content-container">
                <div className="login-page-title">
                    <h1 className="login-page-title-text">Log in jouw account</h1> 
                </div>

                <div className="login-page-form-container">
                    <form onSubmit={handleSubmit} className="login-page-form">

                        <div className="login-page-input-container">
                            <label htmlFor="email">Email Adres</label>
                            <input type="email" id="email" name="email" required onChange={e => setUserName(e.target.value)} />

                            <label htmlFor="password">Wachtwoord</label>
                            <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="login-page-button-container">
                            <button className="login-page-button" type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
};
