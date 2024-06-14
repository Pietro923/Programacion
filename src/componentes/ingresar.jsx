import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../estilos/ingresar.css'; // Importa el archivo CSS

function Ingresar({ show, handleClose }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    handleClose(); // Cierra el modal antes de redirigir
    navigate('/ingresar');
  };

  const handleGoogleLoginClick = () => {
    // Implementa la lógica de inicio de sesión con Google aquí
    alert("Iniciar sesión con Google aún no está implementado");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleLoginClick}>
            Iniciar Sesión
          </Button>
          <Button variant="outline-primary" type="button" onClick={handleLoginClick} className="btn-register">
            Registrate
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>O iniciá sesion con</p>
        <Button variant="light" type="button" onClick={handleGoogleLoginClick} className="btn-google">
          <i className="fab fa-google"></i> Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ingresar;