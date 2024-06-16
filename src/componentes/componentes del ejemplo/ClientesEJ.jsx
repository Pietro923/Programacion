import React from 'react';
import '../../estilos/estilos del ejemplo/ClientesEJ.css'; // Importar el archivo CSS del componente
import imagen1 from '../../imagenes/imagenes del ejemplo/ClienteEJ1.png'; // Importar la imagen de la card 1
import imagen2 from '../../imagenes/imagenes del ejemplo/ClienteEJ2.png'; // Importar la imagen de la card 2
import imagen3 from '../../imagenes/imagenes del ejemplo/ClienteEJ3.png'; // Importar la imagen de la card 3
import imagen4 from '../../imagenes/imagenes del ejemplo/ClienteEJ4.png'; // Importar la imagen de la card 4

function ClientesEJ() {
  const clientes = [
    { img: imagen1, name: 'SnacPhone' },
    { img: imagen2, name: 'MacStation' },
    { img: imagen3, name: 'MaxPro' },
    { img: imagen4, name: 'TodoAppleco' },
  ];

  return (
    <div className="clientes-section">
      <h2>Conoce a nuestros clientes certificados</h2>
      <div className="clientes-container">
        {clientes.map((cliente, index) => (
          <div className="cliente-card" key={index}>
            <img src={cliente.img} alt={`Imagen ${index + 1}`} className="cliente-img" />
            <p>{cliente.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientesEJ;
