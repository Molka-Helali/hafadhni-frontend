import React, { useEffect, useState } from 'react';
import Navbar from "../components/NavBar";
import LineChartine from "../components/LineChartine";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';

const HistoriqueScore = () => {
  const [scoreHistory, setScoreHistory] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('werScores')) || [];
    setScoreHistory(scores);
  }, []);

  // Extract x and y data from scoreHistory
  const chartData = scoreHistory.map(score => ({ x: new Date(score.date).toLocaleTimeString(), y: score.score }));

  return (
    <div>
      <Navbar />
      <hr className="horizontal-line"></hr>
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className="CurrentSessionnn1">
        <h2>Current Session</h2>
      </div>
     
      <div style={{ position: 'absolute', top: 180, left: 220, right: 100, bottom: 200 }}>
        <LineChartine data={chartData} />

        <h2>Session History</h2>

        {scoreHistory.map((score, index) => {
          const scoreDate = new Date(score.date);
          return (
            <div key={index} className='session-history'>
              <span>{scoreDate.toLocaleDateString()}</span>
              <span>{score.score.toFixed(1)}% {score.score >= 90 ? 'EXCELLENT' : score.score >= 75 ? 'GREAT' : 'GOOD'}</span>
              <span>{scoreDate.toLocaleTimeString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HistoriqueScore;
