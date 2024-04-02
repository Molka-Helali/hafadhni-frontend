import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
const Home = () => {
  return (
    <div>
    <Navbar />
    <div className="Ellipse1"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="" />
    </div>
    <hr className="horizontal-line"></hr>
    <h1 className="primary-heading">
    Memorize for good with Test mode
    </h1>
    <hr className="hr-line"></hr>
    
    </div>
  )
}

export default Home
