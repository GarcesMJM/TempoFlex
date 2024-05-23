import React from 'react';
import './css/App.css';
//import Profile from './views/Profile';
import Home from './views/Home';
import Login from './views/Login';
<<<<<<< Updated upstream
import Perfil from './views/Perfil';
//import ForgotPwd from './views/ForgotPwd';
=======
import ForgotPwd from './views/ForgotPwd';
>>>>>>> Stashed changes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
<<<<<<< Updated upstream

      <Route path="perfil" element={<Profile />} />
      
=======
      <Route path='olvidocontraseña' element={<ForgotPwd/>}/>
>>>>>>> Stashed changes
    </Routes>
  );
}
export default App;