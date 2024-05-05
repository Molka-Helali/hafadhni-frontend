import React from 'react'
import Navbar from "../components/NavBar";
import LineChartine from"../components/LineChartine";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
const HistoriqueScore = () => {
  return (
    <div>
    <Navbar />
     <hr className="horizontal-line"></hr>
     <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="background" />
    </div>
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
    </div >
    <div className="CurrentSessionnn1">
      <h2>Current Session</h2>
      </div>
      <div className="current-session">
        <p>AL-Baqarah</p>
      </div>
  <div style={{ position: 'absolute', top: 180, left: 220, right: 100, bottom: 200 }}>
        <LineChartine />
   
      <h2>Session History</h2>
    
        <div className='session-history' >
          <span>Today</span>
          <span>AL-Baqarah</span>
          <span>97.7% EXCELLENT</span>
          <span>1:47AM</span></div>
          <div className='session-history'>
          <span>Today</span>
          <span>AL-Baqarah</span>
          <span>62% GREAT</span>
          <span>1:40AM</span></div>
   
    </div>
    </div>
  )
}

export default HistoriqueScore

