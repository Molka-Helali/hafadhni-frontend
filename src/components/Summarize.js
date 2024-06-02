import React, { useState } from 'react';
import Navbar from "./NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';
import traduction from '../Assets/traduction.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import hafathni from "../Assets/hafthni.png";
import axios from "axios";

const Summarize = () => {
  const [text, setText] = useState("");
  const [showHello, setShowHello] = useState(false);
  const navigate = useNavigate();

  const handleSummarizeClick = () => {
    setShowHello(true);
  };

  const handleMicroClick = async () => {
    try {
      await axios.post('http://localhost:3001/v1/api/essai/text', { text });
      console.log('Text added successfully to the database!');
      navigate(`/Hafathni?text=${encodeURIComponent(text)}`);
    } catch (error) {
      console.error('Error adding text to the database:', error.message);
    }
  };

  const handleLanguageChange = (language) => {
    console.log('Selected language:', language);
  };

  const handleHafathniClick = () => {
    navigate(`/Hafathni?text=${encodeURIComponent("hello my friend")}`);
  };

  return (
    <div>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className="originalFile">Original File</div>
      <div className="box">
        <div className='hellomyfriend'>
          <textarea
            className="input-container2"
            placeholder=""
            onChange={e => setText(e.target.value)}
            value={text}
          ></textarea>
        </div>
      </div>
      <div>
        <button className="button_SummarizeSum" onClick={handleSummarizeClick}>Summarize</button>
      </div>
      <hr className="lineSum" />
      <hr className="lineSum2" />

      <div>
        <button className="MicroButtonSu" onClick={handleMicroClick}>
          <span style={{ position: "relative", top: "-1px", right: "2px", height: "30px", color: "white" }}>Hafathni</span>
        </button>
      </div>

      <div className="traductionIcon1">
        <img src={traduction} alt="" />
        <div className='lang2'>
          <select
            style={{ position: 'relative', right: -30, border: 'none', color: 'blue', fontSize: '15px' }}
            className="languageDropdown"
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>

      <div className="SummaryFileW">Summary File</div>

      <div className="boxSumrize22">
        <div className='hellomyfriend2'>
          <textarea
            className="input-container3"
            placeholder=""
            value={showHello ? "hello my friend" : ""}
            readOnly
          ></textarea>
        </div>
      </div>

      <hr className="lineSum3" style={{ position: 'absolute', top: '727px', left: '800px', width: '647px', border: '0.1px solid #ccc' }} />
      <button className="MicroButtonSu2" onClick={handleHafathniClick}>Hafathni</button>
      <img src={hafathni} alt="hafathni" />
      <Modal />
    </div>
  );
}

export default Summarize;
