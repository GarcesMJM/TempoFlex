import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";
import "../css/Diary.css";

// Datos de ejemplo
const activities = {
  "2024-05-23": [
    { id: 1, title: "Reunión con el equipo", time: "10:00 AM" },
    { id: 2, title: "Llamada con el cliente", time: "02:00 PM" },
  ],
  "2024-05-24": [
    { id: 3, title: "Presentación del proyecto", time: "11:00 AM" },
  ],
};

Modal.setAppElement("#root");

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dailyActivities, setDailyActivities] = useState([]);

  const handleDayClick = (value) => {
    const dateStr = value.toISOString().split("T")[0];
    setSelectedDate(value);
    setDailyActivities(activities[dateStr] || []);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="calendar-view">
      <Calendar onClickDay={handleDayClick} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Actividades del día"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Actividades para el {selectedDate.toDateString()}</h2>
        {dailyActivities.length > 0 ? (
          <ul>
            {dailyActivities.map((activity) => (
              <li key={activity.id}>
                {activity.time} - {activity.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay actividades programadas para este día.</p>
        )}
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Diary;
