import React from "react";
import "./css/App.css";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Login from "./views/Login";
import Manage from "./views/Manage";
import ForgotPwd from "./views/ForgotPwd";
import Diary from "./views/Diary";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Manage" element={<Manage />} />
            <Route path="/olvidocontraseña" element={<ForgotPwd />} />
            <Route path="/agenda" element={<Diary />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
