// routes/servicios.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// Definir una ruta para manejar el envío de correos electrónicos para los servicios
router.post('/send-service-email', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, serviceType } = req.body;

  // Configurar el transporte de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'beelbonacossa@gmail.com',
      pass: 'msho ryvb ltbb ytma'
    }
  });

  // Configurar el mensaje de correo electrónico
  const mailOptions = {
    from: 'beelbonacossa@gmail.com',
    to: email, // Este es el correo que recibe el email
    subject: `Solicitud de servicio: ${serviceType}`,
    text: `
      Nombre: ${firstName} ${lastName}
      Teléfono: ${phoneNumber}
      Correo electrónico: ${email}
      Tipo de servicio: ${serviceType}
    `
  };

  try {
    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo electrónico enviado correctamente.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).send('Hubo un problema al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
  }
});

module.exports = router;
