import React, { useState, useEffect } from 'react';
import '../../estilos/Cardcostos.css';


const CardCostos = () => {
  const [showModal, setShowModal] = useState({ standard: false, premium: false, medida:false, informacion:false });

  const initialFormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  };
  // Función para abrir el modal
  const handleOpenModal = (type) => {
    // Cerrar los otros modales y abrir el modal de información
    setShowModal({ standard: false, premium: false, medida: false, });
    setShowModal((prev) => ({ ...prev, [type]: true }));
  };

  // Función para cerrar el modal
  const handleCloseModal = (type) => {
    setShowModal({ ...showModal, [type]: false });
  };

  // Desde aqui no entiendo que estoy haciendo pero funciona el enviar el correo, pero no manda lo que quiero aun.
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event, modalType) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/servicios/send-service-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Aquí puedes agregar lógica adicional si el envío fue exitoso
        console.log('Mensaje enviado correctamente');
      } else {
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
    }

    // Cierra el modal actual y abre el modal de "informacion"
    handleCloseModal(modalType);
    handleOpenModal('informacion');
  };

  // Hasta aqui no entiendo bien que hice pero "funciona"

  // Evento de teclado para cerrar el modal al presionar "Esc"
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseModal('standard');
        handleCloseModal('premium');
        handleCloseModal('medida');
        handleCloseModal('informacion');
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="card-costos">
      <h1 className="title">Costos de servicios</h1>
      <div className="cartas-container">
        <div className="carta">
          <h2>Servicio Estándar</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Atención al cliente 24/7</li>
            <p>Se solucionan los problemas y dudas del cliente a la brevedad.</p>
            <li>Soporte técnico para caídas del servidor</li>
            <p>Se soluciona rápido todo.</p>
          </ul>
          <h5 className="costo, h5">Costo: $300</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('standard')}>Contratar</button>
        </div>
        <div className="carta">
          <h2>Servicio Premium</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Atención al cliente 24/7 con prioridad alta</li>
            <p>Se solucionan los problemas y dudas del cliente de manera inmediata.</p>
            <li>Soporte técnico dedicado</li>
            <p>Soporte exclusivo y rápido para cualquier incidencia.</p>
            <li>Mantenimiento preventivo del servidor</li>
            <p>Revisiones y optimizaciones periódicas para evitar problemas.</p>
            <li>Consultoría personalizada</li>
            <p>Asesoría especializada para mejorar tu infraestructura tecnológica.</p>
          </ul>
          <h5 className="costo, h5">Costo: $450</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('premium')}>Contratar</button>
        </div>
        <div className="carta">
          <h2>Servicio a medida</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Desarrollo personalizado según requerimientos específicos</li>
            <p>Creación de soluciones únicas adaptadas a las necesidades del cliente.</p>
            <li>Integración con sistemas existentes</li>
            <p>Compatibilidad y conexión efectiva con plataformas y software preexistentes.</p>
            <li>Optimización de rendimiento y escalabilidad</li>
            <p>Implementación de medidas robustas para garantizar la confidencialidad y integridad de la información.</p>
            <li>Interfaz de usuario intuitiva y experiencia de usuario mejorada</li>
            <p>Diseño centrado en el usuario para una navegación fácil y agradable.</p>
          </ul>
          <h5 className="costo, h5">Costo: A tratar</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('medida')}>Contratar</button>
        </div>
      </div>

      {showModal.standard && (
        <div className="modal-container" onClick={() => handleCloseModal('standard')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('standard')}>&times;</span>
            <h3 className='h3'>Contratar Servicio Estándar</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label>Correo:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}/>
              <label>Número:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber}onChange={handleChange} />
              <button onClick={(event) => handleSubmit(event, 'standard')}>Enviar</button>
            </form>
          </div>
        </div>
      )}

      {showModal.premium && (
        <div className="modal-container" onClick={() => handleCloseModal('premium')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('premium')}>&times;</span>
            <h3 className='h3'>Contratar Servicio Premium</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="nombre" />
              <label>Apellido:</label>
              <input type="text" name="apellido" />
              <label>Correo:</label>
              <input type="email" name="correo" />
              <label>Número:</label>
              <input type="tel" name="numero" />
              <button onClick={(event) => handleSubmit(event, 'premium')}>Enviar</button>
            </form>
          </div>
        </div>
      )}
      {showModal.medida && (
        <div className="modal-container" onClick={() => handleCloseModal('medida')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('medida')}>&times;</span>
            <h3 className='h3'>Contratar Servicio Medida</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="nombre" />
              <label>Apellido:</label>
              <input type="text" name="apellido" />
              <label>Correo:</label>
              <input type="email" name="correo" />
              <label>Número:</label>
              <input type="tel" name="numero" />
              <button onClick={(event) => handleSubmit(event, 'standard')}>Enviar</button>
            </form>
          </div>
        </div>
      )}
      {showModal.informacion && (
        <div className="modal-container" onClick={() => handleCloseModal('informacion')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('informacion')}>&times;</span>
            <h3 className='h3'>Muchas gracias!</h3>
            <form className="modal-form">
              <p>A la brevedad se le enviara toda la informacion a su correo.</p>
              <p>Estamos muy contentos de que usted este a punto de ser parte de nuestra familia.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCostos;
