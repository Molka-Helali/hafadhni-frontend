import React, { useState } from 'react';
import axios from 'axios';
import signupPhoto from '../Assets/signup.svg';
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse3.png';
import Logo from '../Assets/LLogo.png';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Login');
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    } else if (!/[A-Z]/.test(password.charAt(0))) {
      setPasswordError('Password must start with an uppercase letter');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      return; // Stop execution if password is invalid
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/v1/api/user/register',
        { email, password, userName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        console.log('User registered successfully');
        window.location = '/';
      } else {
        console.log('User already exists:', email);
        setEmailError(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="signupPhoto" style={{ position: 'absolute', top: 160, left: 900 }}>
        <img src={signupPhoto} alt="" />
      </div>
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

      <div className="Signup-form" style={{ position: 'absolute', top: 80, right: 900 }}>
        <h1 className="Signup-title">Create Account</h1>
        <p className="Signup-title2">
          Follow the instructions to make it easier to register and you will be able to explore inside.
        </p>
        <form className="Signup-input-container" onSubmit={handleCreateAccount}>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <FaUser className="user-icon" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ marginBottom: '15px' }}
            required
          />
          <MdEmail className="em-icon" />

          {emailError && (
            <p style={{ color: 'red', position: 'absolute', top: 275, right: 250, fontSize: 13, fontWeight: 'bold' }}>
              {emailError}
            </p>
          )}

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ marginBottom: '15px' }}
            required
          />
          <RiLockPasswordFill className="pass-icon" style={{ marginBottom: '25px' }} />
          {passwordError && (
            <p style={{ color: 'red', position: 'absolute', top: 365, right: 90,width:305,fontSize: 13, fontWeight: 'bold' }}>
              {passwordError}
            </p>
          )}
<div className='move'>
          <button type="submit" className="login-buttonSignup">
            Create Account
          </button>
        <div className="Log">
            <span>Do you have an account?</span>
            <a href="#" onClick={handleSignUpClick}>
              Login
            </a>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
