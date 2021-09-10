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
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
