const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  specialization: {
    type: String,
  },
  work: {
    type: [],
  },
  raiting: {
    type: Number,
  },
  rewiews: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
