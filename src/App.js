import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Updated imports
import './App.css';
import Home from './components/Home';
import Summarize from './components/Summarize';
import Hafathni from './components/Hafathni';
import Hafathnipro from "./components/Hafathnipro";

function App() {
  return (
    <div className="App">
      {/*router men browserRouter(abbreviation) */}
      <Router>
        <nav>
          <NavLink to="/" exact activeClasseName="active">Home</NavLink>
          <NavLink to="/Summarize"activeClasseName="active"style={{marginLeft:"12px"}}>Summarize</NavLink>
          <NavLink to="/Hafathni"activeClasseName="active"style={{marginLeft:"12px"}}>Hafathni</NavLink>
          <NavLink to="/Hafathnipro"activeClasseName="active"style={{marginLeft:"12px"}}>HAFATHI PRO</NavLink>
        </nav>
        <Routes> {/* Use Routes instead of Switch */}
          <Route  path="/" element={<Home />} /> {/* Use element prop instead of Component */}
          <Route path="/Summarize" element={<Summarize />} />
          <Route path="/Hafathni" element={<Hafathni />} />
          <Route path="/Hafathnipro" element={<Hafathnipro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
