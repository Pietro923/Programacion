import React from 'react';
import '../estilos/ServiceCard.css';  // Si necesitas estilos específicos

function ServiceCard({ name }) {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <div className="card h-100">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt={name} />
          <div className="card-body">
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;