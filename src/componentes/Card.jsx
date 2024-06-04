// Este es el modelo de card que se usa en container card
import React from 'react';
import '../estilos/Card.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-link">LEARN MORE</div>
    </div>
  );
};

export default Card;