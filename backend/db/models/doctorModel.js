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
    type: Array,
    default: [],
  },
  sumRaiting: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: String,
    },
  ],
  img: {
    type: String,
  },
  experience: {
    type: String,
  },
  education: {
    type: String,
  },
  function: {
    type: String,
  }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
