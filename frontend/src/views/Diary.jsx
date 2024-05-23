import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";
import "../css/Diary.css";
import { useNavigate, useLocation } from "react-router-dom";

Modal.setAppElement("#root");

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activities, setActivities] = useState(null);

  const navigate = useNavigate();

  const obtenerActividades = async (date) => {
    try {
      const response = await fetch("http://localhost:5000/obteneractividades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date }),
      });

      const data = await response.json();
      if (data != null) {
        setActivities(data);
      }
    } catch (error) {
      console.error("Error al enviar datos al backend:", error);
    }
  };

  const handleDayClick = async (value) => {
    const dateStr = value.toISOString().split("T")[0];
    setSelectedDate(dateStr);
    await obtenerActividades(dateStr);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="calendar-view">
        <Calendar onClickDay={handleDayClick} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Actividades del día"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>Actividades para el {selectedDate}</h2>
          {activities && Array.isArray(activities) ? (
            <ul>
              {activities.map((actividad) => (
                <li key={actividad.id}>
                  {actividad.nombre} - {actividad.descripcion}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay actividades programadas para este día.</p>
          )}
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      </div>
      <div className="back-buttons">
        <button
          className="back-button"
          onClick={() => navigate(`/Manage`, {
            replace: true,
            state: { isLoggedIn: true },
          })}
        >
          Añadir una actividad
        </button>
      </div>
    </div>
  );
};

export default Diary;
