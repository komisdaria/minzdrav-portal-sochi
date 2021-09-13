const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  doctorSpecialization: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: Array,
    default: '',
  },
  patientsOms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
