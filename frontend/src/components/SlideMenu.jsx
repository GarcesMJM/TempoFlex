import React, { useState } from "react";
import "../css/SlideMenu.css";
import styles from "../css/Home.module.css";
import { useNavigate } from "react-router-dom";

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24px"
            width="24px"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.293 4.293a1 1 0 011.414 1.414L13.414 13l7.293 7.293a1 1 0 01-1.414 1.414L12 14.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 13 3.293 5.707a1 1 0 011.414-1.414L12 11.586l7.293-7.293z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24px"
            width="24px"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16a1 1 0 100-2H4a1 1 0 100 2zm0 7h16a1 1 0 100-2H4a1 1 0 100 2zm0 7h16a1 1 0 100-2H4a1 1 0 100 2z"
            />
          </svg>
        )}
      </button>
      <div className={`slide-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a onClick={() => navigate("/perfil")}>Perfil</a>
          </li>
          <li>
            <a onClick={() => navigate("/Manage")}>Agregar actividad</a>
          </li>
          <button className={styles.buttons} onClick={logOut}>
            Cerrar Sesión
          </button>
        </ul>
      </div>
    </>
  );
};

export default SlideMenu;
