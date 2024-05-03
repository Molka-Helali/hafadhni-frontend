import React, { useState, useEffect } from 'react';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png'; // Corrected import statement
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { BsEmojiDizzy } from 'react-icons/bs';
import { IoEye } from 'react-icons/io5';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md'; // Corrected import statement
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Hafathni() {
  const [recordedText, setRecordedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [listening, setListening] = useState(false);
  const [copied, setCopied] = useState(false);
  const [textVisible, setTextVisible] = useState(true); // State to control text visibility
  const navigate = useNavigate();

  const startListening = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  const {
    resetTranscript,
    transcript,
    listening: speechListening,
  } = useSpeechRecognition();

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


  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => setCopied(true))
      .catch((error) => console.error('Error copying text:', error));
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
            value={recordedText} 
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        )}
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
      <IoEye className={textVisible ? "Eye-icon" : "Eye-icon crossed-out"} />
      </button>
      <button className="ReplayButton" onClick={resetTranscript} title="Click to Replay">
        <MdReplay className="Replay-icon" />
      </button>
      <button className="MicroButton" onClick={listening ? stopListening : startListening} title={listening ? "Stop Microphone" : "Start Microphone"}>
        <FaMicrophoneAlt className={listening ? "Micro-icon active" : "Micro-icon"} />
      </button>
      <button className="CopyButton" onClick={handleCopyClick}>
        <MdOutlineContentCopy /> {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default Hafathni;
