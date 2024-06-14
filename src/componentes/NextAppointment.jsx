// NextAppointment.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NextAppointment() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="next-appointment mt-4 text-center">
      <h2>Próximo turno</h2>
      <p>No tenés ningún turno reservado hasta ahora.</p>
      <button className="btn btn-primary" onClick={handleShowModal}>
        Reservá tu turno
      </button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar un Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Contenido del modal */}
          Aquí puedes colocar el formulario o la información para reservar un turno.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NextAppointment;
