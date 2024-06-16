import React from 'react';
import '../../estilos/estilos del ejemplo/TestimoniosEJ.css';
import avatar1 from '../../imagenes/imagenes del ejemplo/avatarEJ1.webp'; // Importar la imagen del avatar del cliente
import avatar2 from '../../imagenes/imagenes del ejemplo/avatarEJ2.png'; // Importar la imagen del avatar del cliente
import avatar3 from '../../imagenes/imagenes del ejemplo/avatarEJ3.png'; // Importar la imagen del avatar del cliente
import avatar4 from '../../imagenes/imagenes del ejemplo/avatarEJ4.png'; // Importar la imagen del avatar del cliente

function TestimoniosEJ() {
  return (
    <div className="testimonios-section">
      <h2>Testimonios de Clientes</h2>
      <div className="testimonio-card">
        <p className="testimonio-text">“This product has transformed our workflow entirely!”</p>
        <div className="cliente-info">
          <img src={avatar1} alt="Cliente Avatar" className="cliente-avatar" />
          <div className="cliente-detalles">
            <p className="cliente-nombre">Alex Johnson</p>
            <div className="cliente-rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonio-card">
        <p className="testimonio-text">“This product has transformed our workflow entirely!”</p>
        <div className="cliente-info">
          <img src={avatar2} alt="Cliente Avatar" className="cliente-avatar" />
          <div className="cliente-detalles">
            <p className="cliente-nombre">Alex Johnson</p>
            <div className="cliente-rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonio-card">
        <p className="testimonio-text">“This product has transformed our workflow entirely!”</p>
        <div className="cliente-info">
          <img src={avatar3} alt="Cliente Avatar" className="cliente-avatar" />
          <div className="cliente-detalles">
            <p className="cliente-nombre">Alex Johnson</p>
            <div className="cliente-rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonio-card">
        <p className="testimonio-text">“This product has transformed our workflow entirely!”</p>
        <div className="cliente-info">
          <img src={avatar4} alt="Cliente Avatar" className="cliente-avatar" />
          <div className="cliente-detalles">
            <p className="cliente-nombre">Alex Johnson</p>
            <div className="cliente-rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimoniosEJ;