// Programa.jsx
import React from 'react';
import Header from '../componentes/Header';
import ServiceCard from '../componentes/ServiceCard';
import NextAppointment from '../componentes/NextAppointment';

import { Carousel } from 'react-bootstrap'; // Importar Carousel desde react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/programa.css';

function Programa() {
  return (
    <div className="container-fluid app-container">
      <Header />
      <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-8">
          <input type="text" className="form-control" placeholder="Encontrar un servicio" />
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ServiceCard name="Nombre del servicio largo máximo 45 caracteres" />
            </div>
            <div className="col-md-4">
              <ServiceCard name="Nombre del servicio corto" />
            </div>
            <div className="col-md-4">
              <ServiceCard name="Servicio 3" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <ServiceCard name="Servicio 4" />
            </div>
            <div className="col-md-4">
              <ServiceCard name="Servicio 5" />
            </div>
            <div className="col-md-4">
              <ServiceCard name="Servicio 6" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <NextAppointment />
    </div>
  );
}

export default Programa;
