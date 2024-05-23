import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../css/Profile.css';
import user_icon from "../assets/person.png";

const Profile = () => {
  
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[nombre, setNombre] = useState("");
  const[apellido, setApellido] = useState("");
  const[action, setAction] = useState("Editar Perfil");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="user-profile">
      <div className="header">
              <div className="text"> Perfil </div>
              <div className="underline"></div>
      </div>
      <div className="profile-picture">
        <img src={user_icon}/>
        </div>
        <form className="profile-info">
          <div className="inputs">
            {action == "Editar Perfil" ? (
              <div></div>
            ) : (
              <div className="input">
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese Usuario'
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            )}

              <div className="input">
                <input
                  type="email"
                  className='texto'
                  placeholder='Ingrese su Email'
                  value={email}
                  onChange={handleEmailChange}
                />

            </div>
            <div className="input">
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese su nombre'
                  value={nombre}
                  onChange={handleNombreChange}
                />
                
            </div>
            <div className="input">
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese su apellido'
                  value={apellido}
                  onChange={handleApellidoChange}
                />
            </div>
            <div
              className={
                action === "Editar Perfil" ? "submit gray" : "submit"
              }
            >
              Editar Perfil
              </div>    
          </div>
        </form> 
    </div>
  );
}

export default Profile;