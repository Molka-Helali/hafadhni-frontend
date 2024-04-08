import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import { HiOutlinePhotograph } from "react-icons/hi";
const LastMistakes = () => {
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
    <button className="all-button">ALL</button>
     {/*Box1 */}
     <div className="boxLastMistakes1"></div>
     <hr className="line-LastMi1" />
     <div className='NumberOfMistakes1'>1 MISTAKE</div>
     <div className='Historique-score1'>Historique-score</div>
     <div className='Name1AfterUploading'>AL-Baqarah</div>
     <HiOutlinePhotograph  className="HiOutlinePhotograph-icon" />
     <hr className="line-LastMi2" />
     <div className='ContinueReading1'>Continue Reading </div>
    </div>
  )
}

export default LastMistakes

