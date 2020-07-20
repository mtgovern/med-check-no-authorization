const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorsSchema = new Schema({
  name: { type: String, required: true },
  phone: String,
  address: String,
  address2: String,
  city: String,
  state: String,
  zipcode: Number,
  specialty: String,
});

const Doctor = mongoose.model('Doctor', doctorsSchema);

module.exports = Doctor;
