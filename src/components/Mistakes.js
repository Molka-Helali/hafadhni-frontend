import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';
import { GiBackwardTime } from "react-icons/gi";

const Mistakes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve data from location state
  const { referenceText, recordedText, highlightedText } = location.state || {};

  // Log the data for debugging
  console.log({ referenceText, recordedText, highlightedText });

  const handleMistakeClick = () => {
    navigate('/HistoriqueScore');
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
      <div className='IncorrectWords'>Incorrect Words</div>
      <div className='NameOfText'>{new Date().toLocaleString()}</div>
      {/* Display referenceText and recordedText */}
      <div className="boxMisToo">
        <div className='Expected1'>Expected</div>
      <div className='ExpectedName' dangerouslySetInnerHTML={{ __html: highlightedText.expected }}></div>
        <div className='Recited1'>Recited</div>
      <div className='RecitedName' dangerouslySetInnerHTML={{ __html: highlightedText.recited }}></div>
      </div>

      <hr className="line-Mi" />
      <div className="box3" onClick={handleMistakeClick}>
        <div className='PastMistakes'>Check your score history</div>
        <GiBackwardTime className="GiBackwardTime-icon" />
      </div>
    </div>
  );
};

export default Mistakes;
