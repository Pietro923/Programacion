import React, { useState } from 'react';
import '../estilos/contacto.css'; 

function Contacto() {
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
    // Aquí podrías enviar los datos a tu servidor o hacer lo que necesites con ellos
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <h3>Contactate con nosotros</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número de teléfono:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;