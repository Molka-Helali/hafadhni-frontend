import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import HomePhoto from '../Assets/HomePh.svg';
import { HiOutlineMicrophone } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div>
    <div className="Ellipse1"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="" />
    </div>
    <Navbar />
    <hr className="horizontal-line"></hr>
    <h1 className="primary-heading">
    Memorize for good with Test mode
    </h1>
    <hr className="hr-line"></hr>
    <p className='second-heading'>Get scored on practice tests to check your <br/>knowledge and prepare for your next big exam.</p>
    <div className="HomePhoto">
     <img src={HomePhoto} alt="" />
     
      

     </div>
     <button className="button_Hafathni">Hafathni<HiOutlineMicrophone /></button>
     <button className="button_Summarize">Summarize<IoDocumentTextOutline/></button>
     <button className="login-button">Login</button>
        <button className="try-free-button">Try Free</button>
    </div>
    
   
  )
}

export default Home
