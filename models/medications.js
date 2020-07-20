const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationsSchema = new Schema({
  medname: String,
  dosage: String,
  timetotake: String,
  purpose: String,
  prescribingdoc: String,
});

const Medication = mongoose.model('Medication', medicationsSchema);

module.exports = Medication;
