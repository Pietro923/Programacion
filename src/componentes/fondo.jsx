import React from 'react';
import '../estilos/fondo.css'; // Asegúrate de tener este archivo CSS

function fondo() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="text-container">
          <h1>GRAPHICS. WEB. DIGITAL.</h1>
          <h2>START-UP</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <button className="cta-button">EXPLORE WORK</button>
        </div>
      </div>
    </div>
  );
}

export default fondo;