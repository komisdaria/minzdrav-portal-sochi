const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  doctorSpecialization: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
  patientsOms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
