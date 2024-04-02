import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import "./App.css";
import Summarize from './components/Summarize';
import Home from './components/Home';
import Hafathni from './components/Hafathni';
import Hafathnipro from './components/Hafathnipro';
function App() {
  return (
    <div className="App">
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Summarize" element={<Summarize />} />
          <Route path="/Hafathni" element={<Hafathni />} />
          <Route path="/Hafathnipro" element={<Hafathnipro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
