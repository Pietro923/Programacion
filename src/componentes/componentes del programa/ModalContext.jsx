// ModalContext.js
import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [comment, setComment] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setComment('');
  };

  const handleShowUserModal = () => {
    setShowModal(false);
    setShowUserModal(true);
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
    setUserData({ name: '', email: '', phone: '' });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/saveAppointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: userData.name,
          userEmail: userData.email,
          userPhone: userData.phone,
          date: selectedDate,
          time: selectedTime,
          comment
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Turno guardado exitosamente');
        handleCloseUserModal();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al guardar el turno:', error);
      alert('Error al guardar el turno');
    }
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        showUserModal,
        modalContent,
        selectedDate,
        selectedTime,
        comment,
        userData,
        handleShowModal,
        handleCloseModal,
        handleShowUserModal,
        handleCloseUserModal,
        setSelectedDate,
        setSelectedTime,
        setComment,
        setUserData,
        handleSubmit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
