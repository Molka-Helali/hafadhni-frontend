// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import HistoriqueScore from './components/HistoriqueScore';
import LineChartine from './components/LineChartine'; // Corrected import name
import ProfileUser from './components/ProfileUser';
import ForgotPassword from './components/ForgotPassword';
import ConfirmePasword from './components/ConfirmePasword';

import DachbordAdmin from './components/DachbordAdmin';
import AdminEdit from './components/AdminEdit';
import Modal from './components/Modal'

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
          <Route path="/HistoriqueScore" element={<HistoriqueScore/>} />
          <Route path="/LineChartine" element={<LineChartine />} />
         <Route path="/profile/:id" element={<ProfileUser />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ConfirmePasword" element={<ConfirmePasword/>} />
          <Route path="/DachbordAdmin" element={<DachbordAdmin/>} />
          <Route path="/AdminEdit/:id" element={<AdminEdit/>} />
          <Route path=" /Modal" element={< Modal/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
