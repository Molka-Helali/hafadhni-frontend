import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/LLogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [_id, set_id] = useState('');
  const navigate = useNavigate();
 const [role,setRole]=useState('');
  useEffect(() => {
    // Retrieve _id from localStorage
    const stored_id = localStorage.getItem('_id');
    if (stored_id) {
      set_id(stored_id);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleLogoutClick = () => {
    // Perform logout actions here
    // Clear _id from localStorage and reset state
    localStorage.removeItem('_id');
    set_id('');
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
        {/* Check for _id and render My Profile and Logout buttons if _id exists */}
        {_id ? (
          <div>
            <NavLink to={`/profile/${_id}`} style={{ position: "absolute", top: "25px", left: "1100px", textDecoration: 'none' }}>My Profile</NavLink>
            <button className="login-buttonHome" onClick={handleLogoutClick}>Log out</button>
          </div>
        ) : (
          <div>
            {/* Render Login and Signup buttons if _id does not exist */}
            <button className="login-buttonHome" onClick={handleLoginClick}>Login</button>
            <button className="try-free-button" onClick={handleLoginClick}>Signup</button>
          </div>
        )}
        {/* Move the Admin NavLink inside the nav-links div */}
        {/* Also, update the NavLink style */}
       
        {role === 'Admin' && (
      <NavLink to="/DachbordAdmin" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none', position: 'relative', right: '125px' }}>Dashboard</NavLink>
)}
      </div>
    </nav>
  );
}

export default Navbar;
