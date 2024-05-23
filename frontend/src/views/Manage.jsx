import styles from '../css/Manage.module.css';
import Banner from '../components/Banner';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Manage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [initTime, setInitTime] = useState("00:00");
  const [finalTime, setFinalTime] = useState("00:00");

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescChange = (e) => setDesc(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleInitTimeChange = (e) => setInitTime(e.target.value);
  const handleFinalTimeChange = (e) => setFinalTime(e.target.value);

  const location = useLocation();
  const { isLoggedIn } = location.state || { isLoggedIn: false };
  console.log(isLoggedIn);

  const sendActivity = async (e) => {
    if (!name || !desc || !date || !initTime || !finalTime) {
      Swal.fire("No puede haber campos vacíos", "", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/agregarActividades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, desc, date, initTime, finalTime }),
      });

      const data = await response.json();

      if (data.message === true) {
        Swal.fire("Actividad añadida exitosamente", "", "success");
      } else {
        Swal.fire("Error al añadir la actividad", "", "error");
      }

      setName("");
      setDesc("");
      setDate("");
      setInitTime("00:00");
      setFinalTime("00:00");
      navigate(`/agenda`, {
        replace: true,
        state: { isLoggedIn: true },
      });
    } catch (error) {
      console.error("Error al enviar datos al backend:", error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Banner />
      {!isLoggedIn ? (
        <div>
          <h1>Inicia Sesión para gestionar tu horario.</h1>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Agregar actividades</h1>
          <div className={styles.add}>
            <form className={styles.form} action="">
              <input type="text" placeholder="Nombre de la actividad" value={name} onChange={handleNameChange} />
              <textarea type="text" placeholder="Descripción" value={desc} onChange={handleDescChange} rows={3} />
              <div className={styles.row}>
                <div className={styles.date}>
                  <label className={styles.label}>Seleccione la fecha de la actividad:</label>
                  <input type="date" title='Fecha' value={date} min="2024-01-01" max="2030-12-31" onChange={handleDateChange} />
                </div>
                <div className={styles.time}>
                  <label className={styles.label}>Seleccione la hora de inicio:</label>
                  <input type="time" value={initTime} onChange={handleInitTimeChange} />
                </div>
                <div className={styles.time}>
                  <label className={styles.label}>Seleccione la hora de fin:</label>
                  <input type="time" value={finalTime} onChange={handleFinalTimeChange} />
                </div>
              </div>
              <button
                className={styles.submit}
                onClick={() => sendActivity()}
                >
                Añadir al calendario
              </button>
              <div className={styles.buttons}>
                <button
                  className={styles.button}
                  onClick={() => navigate(`/agenda`, {
                    replace: true,
                    state: { isLoggedIn: true },
                  })}
                >
                  Ver mi Agenda
                </button>
                <button
                  className={styles.button}
                  onClick={() => navigate(`/Profile`, {
                    replace: true,
                    state: { isLoggedIn: true },
                  })}
                >
                  Ir a mi perfil
                </button>
                <button
                  className={styles.button}
                  onClick={() => navigate(`/`, {
                    replace: true,
                    state: { isLoggedIn: true },
                  })}
                >
                  Ir al Home
                </button>
                <button
                  className={styles.button}
                  onClick={() => navigate(`/`, {
                    replace: true,
                    state: { isLoggedIn: false },
                  })}
                >
                  Cerrar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Manage;
