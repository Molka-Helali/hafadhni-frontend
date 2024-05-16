import React, { useState, useEffect } from 'react';

import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png'; // Corrected import statement
import Navbar from '../components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsEmojiDizzy } from 'react-icons/bs';
import { IoSend } from "react-icons/io5";

import { IoEye } from 'react-icons/io5';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
import axios from "axios";
import ModalInHafathni from '../components/ModalInHafathni';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Hafathni() {
  const [recordedText, setRecordedText] = useState('');
  const [listening, setListening] = useState(false);
  const [textVisible, setTextVisible] = useState(true); // State to control text visibility
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location)
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get('text');
  var _id = localStorage.getItem("_id");



  const SendContent = async () => {
    try {
      if (!_id) {
        console.error('Error: _id is null');
        return;
      }
  
      await axios.post('http://localhost:3001/v1/api/essai/text/hafathni', {
        content: recordedText,
        _id: _id,
      });
      console.log('Text added successfully to the database!');
    } catch (error) {
      console.error('Error adding text to the database:', error.message);
    }
  };
 
  const startListening = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  const { resetTranscript, transcript} = useSpeechRecognition();

  useEffect(() => {
    setRecordedText(transcript);
  }, [transcript]);

  const handleMistakeClick = () => {
    navigate('/Mistakes');
  };

  const handleScoreClick = () => {
    navigate('/HistoriqueScore');
  };

  const handleEyeClick = () => {
    setTextVisible(!textVisible);
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
        {/* Conditional rendering based on textVisible state */}
        {textVisible && (
          <textarea
            className="input-containerHafathni"
            placeholder="I'm listening to you..."
            value={text || recordedText || ""}
            onChange={(e) => setRecordedText(e.target.value)} // Added onChange event handler
          ></textarea>
        )}
      </div>

      <hr className="line" />
     <div style={{ position: 'relative ', left: 50 }}>
     <button className="MistakeButton" onClick={handleMistakeClick} title="Click to view Mistakes">
        <span>Mistakes</span>
        <BsEmojiDizzy className="Mistake-icon" />
      </button>
      <button className="ScoreButton" onClick={handleScoreClick} title="Click to view Score">
        <span>Score:100%</span>
      </button>
      <button className="EyeButton" onClick={handleEyeClick} title="Click to view Eye">
        <IoEye className={textVisible ? "Eye-icon" : "Eye-icon crossed-out"} />
      </button>
     </div>
      <button className="ReplayButton" style={{ position: 'relative ', top: -55, left: 230 }} onClick={SendContent} title="Click to Replay">
        <IoSend className="Replay-icon" />
      </button>
      <button className="ReplayButton" onClick={resetTranscript} title="Click to Replay">
        <MdReplay className="Replay-icon" />
      </button>

      {/* Corrected button element */}
      <button className="MicroButton" onClick={listening ? stopListening : startListening} title={listening ? "Stop Microphone" : "Start Microphone"}>
        <FaMicrophoneAlt className={listening ? "Micro-icon active" : "Micro-icon"} />
      </button>

      <ModalInHafathni />
  

    
    
    </div>
  );
}

export default Hafathni;