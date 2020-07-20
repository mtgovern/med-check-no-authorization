const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  purpose: { type: String, required: true },
  apptdate: { type: String, required: true },
  apptstart: { type: String, required: true },
  apptend: { type: String },
  doctor: { type: String },
  notes: { type: String },
});

const Appointment = mongoose.model('Appointment', appointmentsSchema);

module.exports = Appointment;
