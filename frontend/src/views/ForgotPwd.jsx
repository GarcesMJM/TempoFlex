import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "../css/ForgotPwd.css";
import Swal from "sweetalert2";

import email_icon from "../assets/email.png";

const ForgotPwd = () => {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const recuperarpwd = async (e) => {
    if (!email) {
      Swal.fire("El campo no puede estar vacío", "", "error");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/recuperarcontraseña",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.message === true) {
        Swal.fire("Correo de recuperación enviado con éxito", "", "success");
      } else {
        Swal.fire("Error al recuperar contaseña", "", "error");
      }

      setEmail("");
    } catch (error) {
      console.error("Error al enviar datos al backend:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="row fila">
        <div className="col-md-4">
          <div className="padre">
            <div className="col-md-13">
              <div className="header">
                <div className="text">Recuperar Contraseña</div>
                <div className="underline"></div>
              </div>

              <div className="card card-body shadow-lg">
                <form className="form">
                  <div className="inputs">
                    <div className="input">
                      <img src={email_icon} alt="" />
                      <input
                        type="email"
                        className="cajatexto"
                        placeholder=" Ingrese Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <div className="submit-container">
                    <div className="submit" onClick={recuperarpwd}>
                      Recuperar contraseña
                    </div>
                  </div>
                  <div className="back">
                    <button
                      className="back-button"
                      onClick={() => navigate("/")}
                    >
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
                          d="M15.707 4.293a1 1 0 010 1.414L10.414 11H20a1 1 0 110 2H10.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
