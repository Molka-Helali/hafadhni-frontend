import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
const Mistakes = () => {
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
     
    </div>
  )
}

export default Mistakes
