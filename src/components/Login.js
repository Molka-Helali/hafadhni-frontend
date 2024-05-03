import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png'; // Corrected filename
import Logo from '../Assets/LLogo.png';
import LoginPh from '../Assets/LoginPh.svg';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/v1/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        console.log('User logged in successfully');
        const userId = response.data.id; 
        localStorage.setItem('userId', userId);
        navigate(`/profile/${userId}`);


      } else {
        console.log('You should register first:', email);
        setEmailError(response.data.msg);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Incorrect password entered', password);
        setPasswordError(error.response.data.msg);
      } else {
        console.error('Error during login:', error);
      }
    }
  };

  const handleClickForget = () => {
    navigate('/ForgotPassword');
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  return (
    <div style={{ position: 'fixed' }}>
      <div className="LoginFix">
        <div className="Ellipse1" style={{ position: 'absolute', top: 0, left: 0 }}>
          <img src={Ellipse1} alt="" />
        </div>
        <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
          <img src={Ellipse2} alt="" />
        </div>
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <hr className="horizontal-line" />
        <div className="LoginPh ">
          <img src={LoginPh} alt="" style={{ height: 500 }} />
        </div>
        <div className="login-form">
          <h1 className="login-title">Login to your Account</h1>
          <p className="title2">Enter to continue and explore</p>
          <form className="login-input-container" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <MdEmail className="email-icon" />
            {emailError && <p style={{ color: 'red', position: 'absolute', top: 315, right: 275, fontSize: 13, fontWeight: 'bold' }}>{emailError}</p>}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <RiLockPasswordFill className="password-icon" />
            {passwordError && <p style={{ color: 'red', position: 'absolute', top: 15, right: 275, fontSize: 13, fontWeight: 'bold' }}>{passwordError}</p>}
            <div className="group-forgot-Password">
              <p className="Forgot-password">
                <a href="#" onClick={handleClickForget}>Forgot password?</a>
              </p>
              <button type="submit" className="login-button1">Login</button>
              <div className="account">
                <span>Don't have an account? </span>
                <a href="#" onClick={handleSignUpClick}>Sign Up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
