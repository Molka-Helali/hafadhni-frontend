import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png';
import languages from '../Assets/languages.svg';
import { useNavigate } from 'react-router-dom';
const Hafathnipro = () => {
  const navigate = useNavigate(); 
  const handleGetStartNowClick = () => {
    navigate('/');
  };
  
  return (
    <div>
     <Navbar />
     <hr className="horizontal-line"></hr>
      <div className="background-image"style={{ position: 'absolute', top: 0, left: 0 }}>
      <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
      <img src={Ellipse2} alt="" /></div>
      <div className='allMove'>
      <div className="text-container">  {/* Added a container class */}
      <span style={{ color: 'black' }}>HAFATHNI</span>
      <span style={{ color: 'blue' }}>PRO</span>
    </div>
    <div className="text-container2">Find your perfect plan </div>
    <div className="languages">
        <img src={languages} alt="" /> </div>
        <div className="pricing-container">
      <div className="pricing-section free">
        <h2>Free</h2>
        <p>€0</p>
        <p>Free forever</p>
        <button onClick={handleGetStartNowClick}>Get started now</button>
        <hr className="line-pro1" />
        <ul className="plan-features">
          <li style={{ position:'relative',left:-72 }}><span class="green-text">✔</span><b> Hide</b> Verses</li>
          <li style={{ position: 'relative', left: -42 }}><span class="green-text">✔</span><b>Summarization</b> text
          </li>
          <li style={{ position: 'relative', left: -72 }} ><span class="green-text">✔</span><b>Translation</b></li>
          </ul>
      </div>
      <div className="pricing-section premium">
        <h2>Premium</h2>
        <p>€6.5</p>
        <p>per user per month</p>
        <button className='BuyNow'>Buy now</button>
        <hr className="line-pro1" />
        <ul className="plan-features">
        <li>
      <span class="green-text">✔</span><b> Memorization</b> Mistake Detection
      </li>
      <li style={{ position:'relative',left:-52 }}> <span class="green-text">✔</span><b>Memorization </b>File</li>
      <li style={{ position:'relative',left:-25 }}> <span class="green-text">✔</span><b>Unlimited</b> Session history</li>
      <li style={{ position:'relative',left:-5 }}> <span class="green-text">✔</span><b>Advanced</b> Analytics and MORE!</li>
      </ul>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hafathnipro
