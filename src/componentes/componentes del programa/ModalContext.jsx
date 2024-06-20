import React, { createContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalContent, setModalContent] = useState(null);
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
    setUserData({
      name: '',
      email: '',
      phone: ''
    });
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

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert(`Turno reservado para: ${selectedDate ? selectedDate.toLocaleDateString() : ''} a las ${selectedTime}\nComentario: ${comment}\nNombre: ${userData.name}\nCorreo: ${userData.email}\nNúmero celular: ${userData.phone}`);
    handleCloseUserModal();
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
            onClick={handleShowUserModal}
            disabled={!selectedDate || !selectedTime}
          >
            Solicitar turno
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUserModal} onHide={handleCloseUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleUserDataChange}
                placeholder="Ingresa tu nombre y apellido"
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserDataChange}
                placeholder="Ingresa tu correo"
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Número celular</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleUserDataChange}
                placeholder="Ingresa tu número celular"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUserModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContext.Provider>
  );
};