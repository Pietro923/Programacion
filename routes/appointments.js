const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Definir un esquema y modelo para los turnos
const appointmentSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  comment: { type: String }
});

const Appointment = mongoose.model('Appointment', appointmentSchema, 'turnos');

// Endpoint para guardar un turno
router.post('/saveAppointment', async (req, res) => {
  try {
    const { userName, userEmail, userPhone, date, time, comment } = req.body;

    // Crear una nueva instancia del modelo Appointment
    const newAppointment = new Appointment({
      userName,
      userEmail,
      userPhone,
      date,
      time,
      comment
    });

    // Guardar en la base de datos
    await newAppointment.save();

    res.status(201).json({ message: 'Turno guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el turno:', error);
    res.status(500).json({ error: 'Error al guardar el turno' });
  }
});

// Exportar el router
module.exports = router;
