import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../css/Profile.css';
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import perfil from "../assets/perfil.png";

const Profile = () => {
  
  const[editing, setEditing] = useState(false);
  const[username, setUsername] = useState("srueda");
  const[email, setEmail] = useState("srueda@u.com");
  const[nombre, setNombre] = useState("Sebastian");
  const[apellido, setApellido] = useState("Rueda");
  const[action, setAction] = useState("Editar Perfil");


  const handleEditChange = () => {
    setEditing(true);
    setUsername("");
    setEmail("");
    setNombre("");
    setApellido("");
  }

  const handleGuardarChange = (e) => {
    setEditing(false);

    // if(username || email || nombre || apellido == "")
    //   {
    //     setUsername("srueda");
    //     setEmail("srueda@u.com");
    //     setNombre("Sebastian");
    //     setApellido("Rueda");
    //   }
  }
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
        <img src={perfil}/>
        </div>
        <form className="profile-info">
          <div className="inputs">
            {editing ? (
              <>
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese Usuario'
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  className='texto'
                  placeholder='Ingrese su Email'
                  value={email}
                  onChange={handleEmailChange}
                />

              </div>

              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese su nombre'
                  value={nombre}
                  onChange={handleNombreChange}
                />
                
            </div>
            <div className="input">
            <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  placeholder='Ingrese su apellido'
                  value={apellido}
                  onChange={handleApellidoChange}
                />
            </div>
            <div
              className="submit"
              onClick={handleGuardarChange}
            >
              Guardar
            </div>
              </>
            ) : 
            (
              <>
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  value={username}
                  readOnly
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  className='texto'
                  value={email}
                  readOnly
                  onChange={handleEmailChange}
                />

              </div>

              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  value={nombre}
                  readOnly
                  onChange={handleNombreChange}
                />
                
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
                <input
                  type="text"
                  className='texto'
                  value={apellido}
                  readOnly
                  onChange={handleApellidoChange}
                />
            </div>
            <div
              className="submit"
              onClick={handleEditChange}
            >
              Editar Perfil
            </div>
              </>

            )}
                
          </div>
        </form> 
    </div>
  );
}

export default Profile;