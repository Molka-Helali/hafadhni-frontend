import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import Logo from '../Assets/LLogo.png'; 
/*import Ellipse1 from '../Assets/Ellipse1.png';*/
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      {/*error in this when i add ellipse does
      <div className="Ellipse1"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="" />
    </div>*/}
      <div className="nav-links">
      <NavLink to="/" exact activeClassName="active" style={{ marginLeft: "422px", textDecoration: 'none' }}>Home</NavLink>
      <NavLink to="/Summarize" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Summarize</NavLink>
      <NavLink to="/Hafathni" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Hafathni</NavLink>
      <NavLink to="/Hafathnipro" activeClassName="active" style={{ marginLeft: "38px", textDecoration: 'none' }}>Hafathni Pro</NavLink>
      <NavLink to="/ProfileUser" activeClassName="active" style={{ marginLeft: "168px", textDecoration: 'none' }}>Your Profile</NavLink>
      </div>
    
    </nav>
  );
}

export default Navbar;
