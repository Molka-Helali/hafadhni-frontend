import React from 'react';
import Navbar from '../components/NavBar';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse4.png';
import ConfirmePhoto from '../Assets/confirme11.svg';
const ConfirmePasword = () => {
  return (
    <div>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 700, right: -10 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className="ConfirmePhoto" style={{ position: 'absolute', top: -30, left: 900, height: 800, width: 400 }}>
      <img src={ConfirmePhoto} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
      <div className="password-confirmation">
        <h2>Password Confirmation</h2>
        <form>
          <label>Password:</label>
          <input type="password" />
          <label>Confirm Password:</label>
          <input type="password" />
          <button type="submit">Confirm</button>
        </form>
        {/* This paragraph will display confirmation messages */}
        {/* Example: */}
        {/* <p>Password confirmed successfully!</p> */}
      </div>
    </div>
  );
}

export default ConfirmePasword;
