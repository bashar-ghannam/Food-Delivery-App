import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  return (
    <div className="login-popup">
      <form className="container-login-popup">
        <div className="title-login-popup">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="inputs-login-popup">
          {currState === 'Login' ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState}</button>
        <div className="condition-login-popup">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState('Login')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export { LoginPopup };
