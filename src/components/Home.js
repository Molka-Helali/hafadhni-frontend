import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { HiOutlineMicrophone } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import HomePhoto from '../Assets/HomePh.svg';

const Home = () => {
  const navigate = useNavigate();



  const handleHafathniClick = () => {
    navigate('/Upload');
  };

  const handleSummerizeHomeClick = () => {
    navigate('/Summarize');
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div style={{ backgroundColor: 'white', position: 'fixed' }}>
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>

      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>

      <Navbar />

      <hr className="horizontal-line" />
      <h1 className="primary-heading">Memorize for good with Test mode</h1>
      <hr className="hr-line" />
      <p className='second-heading'>Get scored on practice tests to check your <br />knowledge and prepare for your next big exam.</p>
      <div className="HomePhoto">
        <img src={HomePhoto} alt="" />
      </div>

      <button className="button_Hafathni" onClick={handleHafathniClick}>Hafathni<HiOutlineMicrophone className="IconnHafathniii" /></button>
      <button className="button_Summarize" onClick={handleSummerizeHomeClick}>Summarize<IoDocumentTextOutline className="IconnSummarizing" /></button>

   

      <div className='langg'>
        <div className="langLabel" onClick={() => setShowDropdown(!showDropdown)}>{selectedLanguage}</div>
        <div className="langIconn" onClick={() => setShowDropdown(!showDropdown)}>
          <div className={showDropdown ? "arrowIcon rotated" : "arrowIcon"}>&#9660;</div>
        </div>
        {showDropdown && (
  <div className="0">
    <div onClick={() => handleLanguageChange('Français')}>Français</div>
    <div onClick={() => handleLanguageChange('Arabic')}>عربي</div>
  </div>
)}
</div>
      

    </div>
  );
}

export default Home;
