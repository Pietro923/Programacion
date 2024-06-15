import React, { createContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [comment, setComment] = useState('');

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const hours = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <ModalContext.Provider value={{ handleShowModal, handleCloseModal }}>
      {children}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar un Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent || 'Aquí puedes colocar el formulario o la información para reservar un turno.'}
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
          <div className="mt-3">
            <h5>Selecciona una hora:</h5>
            <div className="d-flex flex-wrap">
              {hours.map((hour) => (
                <Button
                  key={hour}
                  variant={selectedTime === hour ? 'primary' : 'outline-primary'}
                  className="m-1"
                  onClick={() => handleTimeChange(hour)}
                >
                  {hour}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <h5>Comentario:</h5>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Agrega un comentario..."
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button 
            variant="primary" 
            onClick={() => alert(`Turno reservado para: ${selectedDate ? selectedDate.toLocaleDateString() : ''} a las ${selectedTime}\nComentario: ${comment}`)}
            disabled={!selectedDate || !selectedTime}
          >
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContext.Provider>
  );
};
