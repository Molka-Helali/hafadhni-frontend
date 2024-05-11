import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/LLogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleLogoutClick = () => {
    // Perform logout actions here
    // Clear userId from localStorage and reset state
    localStorage.removeItem('userId');
    setUserId('');
  };

  return (
    <nav className="nav">
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-links">
        <NavLink to="/" exact activeClassName="active" style={{ marginLeft: "422px", textDecoration: 'none' }}>Home</NavLink>
        <NavLink to="/Summarize" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Summarize</NavLink>
        <NavLink to="/Hafathni" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Hafathni</NavLink>
        <NavLink to="/Hafathnipro" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Hafathni Pro</NavLink>
        {userId ? (
          <div>
            <NavLink to={`/profile/${userId}`} style={{ position: "absolute", top: "25px", left: "1100px", textDecoration: 'none' }}>My Profile</NavLink>
            <button  className="login-buttonHome"  onClick={handleLogoutClick}>Log out</button>
          </div>
        ) : (
          <div>
            <button className="login-buttonHome" onClick={handleLoginClick}>Login</button>
            <button className="try-free-button" onClick={handleLoginClick}>Signup</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
