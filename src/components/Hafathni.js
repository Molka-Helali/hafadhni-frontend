import React from 'react';
import Navbar from '../components/NavBar'; // Assuming NavBar is a sibling component

function Hafathni() { // Use functional component syntax for clarity
  return (
    <div className="app-container"> {/* Add a main container class */}
      <Navbar />
      <hr className="horizontal-line" /> {/* Semantic class name */}
      <div className="input-container-hafatni"> {/* Class for input section */}
  <span className="placeholder-text">I'm listening to you ...</span> {/* Place placeholder text outside input */}
  <input className="input-container" type="text" placeholder="" /> {/* Leave placeholder attribute empty */}
  <hr className="line" />
</div>
      </div>

  );
}

export default Hafathni;

