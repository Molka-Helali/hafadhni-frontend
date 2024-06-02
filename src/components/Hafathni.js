import React, { useState, useEffect } from 'react';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';
import Navbar from '../components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsEmojiDizzy } from 'react-icons/bs';
import { IoSend, IoEye } from "react-icons/io5";
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
import axios from "axios";
import ModalInHafathni from '../components/ModalInHafathni';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Hafathni() {
  const [recordedText, setRecordedText] = useState('');
  const [listening, setListening] = useState(false);
  const [textVisible, setTextVisible] = useState(true); 

  const [imageText, setImageText] = useState('');
  const [referenceText, setReferenceText] = useState('');
  const [werScore, setWerScore] = useState(null);
  const [mistakes, setMistakes] = useState([]);
  const [highlightedText, setHighlightedText] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  function preprocessText(text) {
    text = text.toLowerCase();
    text = text.replace(/[^\w\s]/g, '');
    return text;
  }

  useEffect(() => {
    const text = queryParams.get('text');
    setReferenceText(text || '');
  }, [location.search]);

  const startListening = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  const { resetTranscript, transcript } = useSpeechRecognition();

  useEffect(() => {
    setRecordedText(transcript);
  }, [transcript]);

  const handleMistakeClick = async () => {
    try {
      const preprocessedReferenceText = preprocessText(referenceText || imageText);
      const preprocessedHypothesisText = preprocessText(recordedText);

      const highlightedTextResult = await calculateHighlightedText(preprocessedReferenceText, preprocessedHypothesisText);
      
      const highlightedText = {
        expected: `<span>${highlightedTextResult.ref_highlighted}</span>`,
        recited: `<span>${highlightedTextResult.hyp_highlighted}</span>`
      };

      setHighlightedText(highlightedText);

      const { wer_score, mistakes } = await calculateWer(preprocessedReferenceText, preprocessedHypothesisText);
      setWerScore(wer_score);
      setMistakes(mistakes);

      const scoreHistory = JSON.parse(localStorage.getItem('werScores')) || [];
      const newScore = {
        date: new Date().toISOString(),
        text: preprocessedReferenceText,
        score: (1 - wer_score) * 100
      };

      scoreHistory.push(newScore);
      localStorage.setItem('werScores', JSON.stringify(scoreHistory));

      navigate('/Mistakes', {
        state: {
          referenceText: preprocessedReferenceText,
          recordedText: preprocessedHypothesisText,
          highlightedText: highlightedText
        }
      });
    } catch (error) {
      console.error('Error processing text:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  const handleScoreClick = () => {
    navigate('/HistoriqueScore');
  };

  const handleEyeClick = () => {
    setTextVisible(!textVisible);
  };

  const calculateHighlightedText = async (referenceText, hypothesisText) => {
    try {
      const response = await axios.post('http://localhost:5000/calculate_wer', {
        reference_text: referenceText,
        hypothesis_text: hypothesisText
      });

      const { ref_highlighted, hyp_highlighted } = response.data;
      const highlightedText = {
        ref_highlighted: ref_highlighted,
        hyp_highlighted: hyp_highlighted
      };
      return highlightedText;
    } catch (error) {
      console.error('Error calculating highlighted text:', error.message);
      throw error;
    }
  };

  const calculateWer = async (referenceText, hypothesisText) => {
    try {
      const response = await axios.post('http://localhost:5000/calculate_wer', {
        reference_text: referenceText,
        hypothesis_text: hypothesisText
      });
      return response.data;
    } catch (error) {
      throw new Error('Error calculating WER');
    }
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
        {textVisible && (
          <textarea
            className="input-containerHafathni"
            placeholder="I'm listening to you..."
            value={recordedText || imageText || referenceText || ""}
            onChange={(e) => setRecordedText(e.target.value)}
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
        <span>Score: {werScore !== null ? `${(1 - werScore) * 100}% `: "Calculating..."}</span>
        </button>
        <button className="EyeButton" onClick={handleEyeClick} title="Click to view Eye">
          <IoEye className={textVisible ? "Eye-icon" : "Eye-icon crossed-out"} />
        </button>
      </div>
      <button className="ReplayButton" style={{ position: 'relative ', top: -55, left: 230 }} onClick={handleMistakeClick} title="Click to Send">
        <IoSend className="Replay-icon" />
      </button>
      <button className="ReplayButton" onClick={resetTranscript} title="Click to Replay">
        <MdReplay className="Replay-icon" />
      </button>
      <button className="MicroButton" onClick={listening ? stopListening : startListening} title={listening ? "Stop Microphone" : "Start Microphone"}>
        <FaMicrophoneAlt className={listening ? "Micro-icon active" : "Micro-icon"} />
      </button>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }}></div>
      <ModalInHafathni setReferenceText={setImageText} className="Mistake-icon" />
    </div>
  );
}

export default Hafathni;
