import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import "./App.css";
import Summarize from './components/Summarize';
import Home from './components/Home';
import Hafathni from './components/Hafathni';
import Hafathnipro from './components/Hafathnipro';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import Mistakes from './components/Mistakes';
import LastMistakes from './components/LastMistakes';
function App() {
  return (
    <div className="App">
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Summarize" element={<Summarize />} />
          <Route path="/Hafathni" element={<Hafathni />} />
          <Route path="/Hafathnipro" element={<Hafathnipro />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Upload" element={<Upload/>} />
          <Route path="/Mistakes" element={<Mistakes/>} />
          <Route path="/LastMistakes" element={<LastMistakes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
