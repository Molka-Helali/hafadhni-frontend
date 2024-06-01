import React from 'react';
import Navbar from '../components/NavBar';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const LastMistakes = () => {
  const navigate = useNavigate();

  const handleHistoriqueScoreClick = () => {
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
      <button className="all-button">ALL</button>
      {/* Box1 */}
      <div className="boxLastMistakes1"></div>
      <hr className="line-LastMi1" />
      <div className='NumberOfMistakes1'>
        1 MISTAKE
        <BsFillEmojiDizzyFill className="BsFillEmojiDizzyFill-icon" />
      </div>
      {/* Updated the className to match the onClick function */}
      <div className='Historique-score1' onClick={handleHistoriqueScoreClick}>Historique-score</div>
      <div className='Name1AfterUploading'>AL-Baqarah</div>
      <HiOutlinePhotograph className="HiOutlinePhotograph-icon" />
      <hr className="line-LastMi2" />
      <div className='ContinueReading1'>Continue Reading </div>
      <BiChevronRight className=" BiChevronRight-icon" />
      <div className='TimeLastMistakes'>TODAY 1:45AM-1:40AM </div>
      {/* Box2 */}
      <div className="AllboxLastMistakes2">
        <div className="boxLastMistakes2"></div>
        <hr className="line-LastMi3" />
        <div className='NumberOfMistakes2'>
          1 MISTAKE
          <BsFillEmojiDizzyFill className="BsFillEmojiDizzyFill-icon2" />
        </div>
        {/* Updated the className to match the onClick function */}
        <div className='Historique-score2' onClick={handleHistoriqueScoreClick}>Historique-score</div>
        <div className='Name1AfterUploading'>AL-Baqarah</div>
        <HiOutlinePhotograph className="HiOutlinePhotograph-icon2" />
        <hr className="line-LastMi4" />
        <div className='ContinueReading2'>Continue Reading </div>
        <BiChevronRight className=" BiChevronRight-icon2" />
        <div className='TimeLastMistakes2'>TODAY 1:45AM-1:40AM </div>
      </div>
      {/* Box3 */}
      <div className="AllboxLastMistakes3">
        <div className="boxLastMistakes3"></div>
        <hr className="line-LastMi5" />
        <div className='NumberOfMistakes3'>
          1 MISTAKE
          <BsFillEmojiDizzyFill className="BsFillEmojiDizzyFill-icon3" />
        </div>
        {/* Updated the className to match the onClick function */}
        <div className='Historique-score3' onClick={handleHistoriqueScoreClick}>Historique-score</div>
        <div className='Name1AfterUploading3'>AL-Baqarah</div>
        <HiOutlinePhotograph className="HiOutlinePhotograph-icon3" />
        <hr className="line-LastMi6" />
        <div className='ContinueReading2'>Continue Reading </div>
        <BiChevronRight className=" BiChevronRight-icon3" />
        <div className='TimeLastMistakes3'>TODAY 1:45AM-1:40AM </div>
      </div>
    </div>
  );
};

export default LastMistakes;
