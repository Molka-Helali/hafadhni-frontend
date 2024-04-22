import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import { GiBackwardTime } from "react-icons/gi";

const Mistakes = () => {
  const navigate = useNavigate(); // Get the navigate function
  const handleMistakeClick = () => {
    navigate('/LastMistakes');
  };
  return (
    <div>
   <Navbar />
     <hr className="horizontal-line"></hr>
     <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="background" />
    </div>
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
    </div>
    <div className='IncorrectWords'>Incorrect Words</div>
    <div className='NameOfText'>AL-Baqarah-1:40AM</div>
     {/*Box1 */}
    <div className="boxMisToo">
    <div className='Expected1'>Expected</div>
    <div className='ExpectedName'>وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ</div>
    <div className='Recited1'>Recited</div>
    <div className='RecitedName'>وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ</div>
    </div>
    <hr className="line-Mi" />

    {/*Box2 */}
    <div className='IncorrectWords2'>Incorrect Words</div>
    <div className='NameOfText2'>AL-Baqarah-1:40AM</div>
    <div className="box2">
    <div className='Expected2'>Expected</div>
    <div className='ExpectedName2'>وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ</div>
    <div className='Recited2'>Recited</div>
    <div className='RecitedName2'>وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ</div>
    </div>
    <hr className="line-Mi2" />
     {/*Box3*/}
     <div className="box3" onClick={handleMistakeClick }>
     <div className='PastMistakes'>See Past Mistakes  </div>
      <GiBackwardTime  className="GiBackwardTime-icon" /> </div>
    </div>
    
  )
}

export default Mistakes
