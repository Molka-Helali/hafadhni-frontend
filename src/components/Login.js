
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import Logo from '../Assets/Logo.png';
import LoginPh from '../Assets/LoginPh.svg';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const Login = () => {
  const navigate = useNavigate(); // Get the navigate function
  const handleClickForget = () => {
    navigate('/ForgotPassword');};
  const handleSignUpClick = () => {
    navigate('/SignUp');
  
  };
  return (
    <div  style={{ position: 'fixed' }}>
    <div className='LoginFix'>
    <div className="Ellipse1"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="" />
    </div>
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
    </div>
    <div className="Logo">
        <img src={Logo} alt="" />
      </div>
    <hr className="horizontal-line"></hr>
    <div className="LoginPh ">
        <img src={LoginPh} alt="" style={{ height:500}}/>
      </div> 
      <div className="login-form">
         <h1 className="login-title">Login to your Account</h1>
         <p className="title2">Enter to continue and explore </p>
         <form className="login-input-container">
           <input type="text" id="username" name="username" placeholder="Enter email" />
           <MdEmail className="email-icon" />
           <input type="password" id="password" name="password" placeholder="password"/> 
           <RiLockPasswordFill className="password-icon" />
           <div className="group-forgot-Password">
           <p className="Forgot-password">
        <a href="#" onClick={handleClickForget}>Forgot password?</a>
      </p>
           <button type="submit" className="login-button1">Login </button>
           <div className="account">
      <span>Don't have an account? </span> {/* Corrected spacing */}
      <a href="#" onClick={handleSignUpClick}>Sign Up</a>
    </div>
    </div>               
         </form>
       </div>
    </div>
    </div>
    
  )
}

export default Login
