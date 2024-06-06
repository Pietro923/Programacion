// componentes/navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../estilos/navbar.css';
import Ingresar from '../componentes/ingresar.jsx';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNavigateHome = () => {
    navigate('/'); // Redirige a la ruta raíz
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Nosotros</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleNavigateHome}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Equipo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowModal}>Ingresar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Ingresar show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default Navbar;