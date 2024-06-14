import React from 'react';
import '../estilos/New.css'; // Si necesitas estilos específicos

function News() {
    return (
      <div className="news mt-4">
        <h2>Novedades</h2>
        <div className="news-item d-flex align-items-center">
          <img src="https://via.placeholder.com/300x100" alt="Novedad" className="img-fluid" />
          <p className="ms-3">Novedad promoción</p>
        </div>
      </div>
    );
  }
  
  export default News;