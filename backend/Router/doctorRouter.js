const express = require("express");
const router = express.Router();
const doctorsModel = require("../db/models/doctorModel");

router.route("/").get(async (req, res) => {
  try {
    const doctors = await doctorsModel.find().lean();
    res.status(200).json({
      doctors: doctors.map(({ _id, ...rest }) => ({ ...rest, id: _id })),
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


module.exports = router;
