import React, { useState } from 'react';
import '../../estilos/estilos del ejemplo/ContactanosEJ.css';

function ContactanosEJ() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Mensaje Enviado. Muchas gracias por ponerse en contacto con nosotros!');
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Contacto</h2>
        <p>Por favor, rellena el formulario para ponerte en contacto con nosotros.</p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Mensaje:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
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
        </form>
      </div>
    </div>
  );
}

export default ContactanosEJ;
