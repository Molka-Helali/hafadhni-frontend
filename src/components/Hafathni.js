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
    navigate('/HistoriqueScore');
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
    <div className="app-container">
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      
      <Navbar />
      <hr className="horizontal-line" /> 
    
      <div className="innerBox"> 
        <textarea className="input-containerHafathni" placeholder="I'm listening to you ..."></textarea>
      </div>
      
      <hr className="line" />
      <button className="MistakeButton" onClick={handleMistakeClick} title="Click to view Mistakes">
        <span>Mistakes</span>
        <BsEmojiDizzy className="Mistake-icon" />
      </button>
      <button className="ScoreButton" onClick={handleScoreClick} title="Click to view Score">
        <span>Score:100%</span>
      </button>
      <button className="EyeButton" onClick={handleEyeClick} title="Click to view Eye">
        <IoEye className="Eye-icon" />
      </button>
      <button className="ReplayButton" onClick={handleReplayClick} title="Click to Replay">
        <MdReplay className="Replay-icon" />
      </button>
      <button className="MicroButton" onClick={handleMicroClick} title="Click to view Micro">
        <FaMicrophoneAlt className="Micro-icon" />
        <div>
          <MdOutlineContentCopy className="Copy-icon" />
        </div>
      </button>
    </div>
  );
}

export default Hafathni;
