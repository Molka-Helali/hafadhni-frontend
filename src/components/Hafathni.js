import React from 'react';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineContentCopy } from "react-icons/md";
import { BsEmojiDizzy } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdReplay } from "react-icons/md";

function Hafathni() { 
  const navigate = useNavigate(); 
  const handleMistakeClick = () => {
    navigate('/Mistakes');
  };
  const handleScoreClick = () => {
    navigate('/SignUp');
  };
  const handleEyeClick= () => {
    navigate('/SignUp');
  };
  const handleReplayClick= () => {
    navigate('/SignUp');
  };
  const handleMicroClick= () => {
    navigate('/SignUp');
  };
  return (
    <div className="app-container"> {/* Add a main container class */}
    <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="background" />
    </div>
  
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
    </div>
      <Navbar />
      <hr className="horizontal-line" /> {/* Semantic class name */}
      <div className="input-container-hafatni"> {/* Class for input section */}
     
      <input className="input-container" type="text" placeholder="" /> {/* Leave placeholder attribute empty */}
      <span className="placeholder-text">I'm listening to you ...</span> {/* Place placeholder text outside input */}
      <MdOutlineContentCopy  className="Copy-icon" />
      <hr className="line" />
      <button className="MistakeButton" onClick={handleMistakeClick}><span>Mistakes</span>
      <BsEmojiDizzy  className="Mistake-icon" />
      </button>
      <button className="ScoreButton" onClick={handleScoreClick}><span>Score:100%</span>
      </button>
      <button className="EyeButton" onClick={handleEyeClick}>
      <IoEye className="Eye-icon" />
      </button>
      <button className="ReplayButton" onClick={handleReplayClick}>
      <MdReplay  className="Replay-icon" />
      </button>
      <button className="MicroButton" onClick={handleMicroClick}>
      < FaMicrophoneAlt className="Micro-icon" />
      </button>
    </div>
    </div>

  );
}

export default Hafathni;

