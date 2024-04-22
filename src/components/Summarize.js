import React from 'react'
import Navbar from "./NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import traduction from '../Assets/traduction.svg';
import { FaMicrophoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AiFillFolderOpen } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl"
const Summarize = () => {
  const navigate = useNavigate(); 
  const handleMicroClick = () => {
    navigate('/Hafathni');
  };
  const handleFILClick = () => {
    navigate('/Upload');
  };
 
  return (
    <div>
     <Navbar />
     <hr className="horizontal-line"></hr>
    
      <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
      <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
      <img src={Ellipse2} alt="" /></div>
      <div className="originalFile">Original File</div>
      <div className="box">
            <div className='hellomyfriend'>
                <textarea className="input-container2" placeholder=""></textarea>
            </div>
            </div>
       
      <hr className="lineSum" />
      <hr className="lineSum2" />
    <div>
    <div>
      <button className="MicroButtonSu" onClick={handleMicroClick}>
      < FaMicrophoneAlt className="Micro-iconSu" />
      <button className="button_SummarizeSum"onClick={handleMicroClick}>Summarize
      </button>
      </button>
      </div>
      
      <button className="FillSum" onClick={handleFILClick}>
      <  AiFillFolderOpen className="FillFolderSum" />
      </button>
      </div>
      <div className="traductionIcon1">
        <img src={traduction} alt="" />
        <div className='lang2'>English<SlArrowDown className="langIcon"/></div>
      </div>
      
    
      <div className="SummaryFileW">Summary File</div>
      <div className="boxSumrize22">
     <div className='hellomyfriend2'>
     <textarea className="input-container3" placeholder=""></textarea>
    
     </div>
     </div>
     <hr className="lineSum3" style={{ position: 'absolute', top: '727px', left: '800px', width: '647px', border: '0.1px solid #ccc' }} />
     <button className="MicroButtonSu2" onClick={handleMicroClick}>
     < FaMicrophoneAlt className="Micro-iconSu2" />
     </button>
     </div>
  
  )
}

export default Summarize