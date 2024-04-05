
import React from 'react';
import Navbar from "../components/NavBar";
import { useNavigate } from 'react-router-dom';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import HomePhoto from '../Assets/HomePh.svg';
import { HiOutlineMicrophone } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";

const Home = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleLoginClick = () => {
        navigate('/Login');
      };
      const handleSignUpClick = () => {
        navigate('/SignUp'); }// Redirect to the /login route
        const handleHafathniClick = () => {
          navigate('/Upload'); }// Redirect to the /login route
  return (
    
    <div>
    <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="background" />
    </div>
  
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
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
     <button className="button_Hafathni"onClick={handleHafathniClick}>Hafathni<HiOutlineMicrophone /></button>
     <button className="button_Summarize">Summarize<IoDocumentTextOutline/></button>

     <button className="login-buttonHome" onClick={handleLoginClick}>
        Login
      </button>
      
    <button className="try-free-button"onClick={handleSignUpClick}>Try Free</button>
    <p className='lang'>English<SlArrowDown /></p>
    </div> 
   
  )
}

export default Home
