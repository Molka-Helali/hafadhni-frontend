import React from 'react';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse4.png';
import keyPassword1 from '../Assets/Key3.svg';
const ForgotPassword = () => {
const navigate = useNavigate();
  const handleClickFs = () => {
    navigate('/Login');
  };
  const  handleClickConfirmePassword = () => {
    navigate('/ConfirmePasword');
  };
 
  return (
    <div style={{ position: 'fixed'}}>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 700, right: -10 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className="keyPassword1" style={{ position: 'absolute', top: -30, left: 900, height: 800, width: 400 }}>
      <img src={keyPassword1} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
      <div className="forgot-password-container" >
      <h1>Forgot your password?</h1>
      <p>If you forgot your password, well, then we'll email you instructions to reset your password.</p>
      <form  style={{height:200 }}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email address" />
        <button type="submit"onClick={handleClickConfirmePassword}>Send Reset Link</button>
        <div className="return-to-login"style={{ position: 'fixed', top: 480, }}>
         <a href="#" onClick={handleClickFs}>Back to login</a>
      </div>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
