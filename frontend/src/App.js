import React from 'react';
import './css/App.css';
//import Profile from './views/Profile';
import Home from './views/Home';
import Login from './views/Login';
import Perfil from './views/Perfil';
//import ForgotPwd from './views/ForgotPwd';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="login" element={<Login />} />

      <Route path="perfil" element={<Profile />} />
      
    </Routes>
  );
}
export default App;