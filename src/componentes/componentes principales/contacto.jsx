import React, { useState } from 'react';
import '../../estilos/contacto.css';

function Contacto() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/contacto/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Limpiar los campos del formulario
        setFormData(initialFormData);
        // Mostrar mensaje de éxito
        alert('Mensaje Enviado. ¡Gracias por contactarnos!');
      } else {
        // Manejar la respuesta si hay algún error en la solicitud
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-left">
          <label>
            Mensaje:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
        </div>
        <div className="form-right">
          <label>
            Nombre:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label>
            Apellido:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <label>
            Número de teléfono:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
