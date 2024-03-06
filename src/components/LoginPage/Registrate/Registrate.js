import React from 'react';
import '../LoginPage.css';

const Registrate = () => {
    // Component logic goes here

    return (
        <div className="login-page-container">
            <div className="login-page-content-container">
                <div className="login-page-title">
                    <h1 className="login-page-title-text">Maak jou account aan</h1> 
                </div>

                <div className="login-page-form-container">
                    <form className="registrate-page-form">

                        <div className="login-page-input-container">
                            <label htmlFor="email">Email Adres</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="password">Wachtwoord</label>
                            <input type="password" id="password" name="password" required />

                            <div className="checkbox-container">
                                <input type="checkbox" id="terms" name="terms" required />
                                <label htmlFor="terms">U gaat ermee akkoord updates en aanbiedingen van Wordle Warriors te ontvangen. U kunt zich altijd afmelden of contact met ons opnemen.</label>
                            </div>
                        </div>

                        <p className='registrate-extra-info'>Door een account aan te maken, gaat u akkoord met de bijgewerkte verkoopvoorwaarden, servicevoorwaarden en privacybeleid.</p>

                        <div className="login-page-button-container">
                            <button className="login-page-button" >Registreer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registrate;