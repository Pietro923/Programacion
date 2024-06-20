import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../estilos/ingresar.css'; // Importa el archivo CSS

function Ingresar({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Inicio de sesión exitoso');
        // Aquí puedes manejar el almacenamiento del token JWT en el localStorage o contexto
        handleClose();
        navigate('/ingresar'); 
      } else {
        alert(data.error);
      }
      } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
      }
  };

  const handleRegisterClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registro exitoso');
        // Puedes iniciar sesión automáticamente después del registro si lo deseas
        handleLoginClick();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario');
    }
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
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleLoginClick}>
            Iniciar Sesión
          </Button>
          <Button variant="outline-primary" type="button" onClick={handleRegisterClick} className="btn-register">
            Registrate
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>O iniciá sesión con</p>
        <Button variant="light" type="button" onClick={handleGoogleLoginClick} className="btn-google">
          <i className="fab fa-google"></i> Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ingresar;