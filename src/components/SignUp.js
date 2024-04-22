import React from 'react';
import signupPhoto from '../Assets/signup.svg';
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse3.png';
import Logo from '../Assets/Logo.png';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa6';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Login');
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
        <form className="Signup-input-container">
          <input type="text" id="username" name="username" placeholder="Username" />
          <FaUser className="user-icon" />
          <input type="Email" id="Email" name="password" placeholder="Email" />
          <MdEmail className="em-icon" />
          <input type="password" id="password" name="password" placeholder="password" />
          <RiLockPasswordFill className="pass-icon" />
          <button type="submit" className="login-buttonSignup">
            Create Account
          </button>

          <div className="social-buttongoogle">
            Google
            <FcGoogle className="Google-icon" />
          </div>

          <div className="social-buttonfacebook">
            <FaFacebookF className="Facebook-icon" />
            Facebook
          </div>
          <div className="Log">
            <span>Do you have an account?</span>
            <a href="#" onClick={handleSignUpClick}>
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
