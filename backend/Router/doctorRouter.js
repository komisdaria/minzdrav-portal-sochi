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

router.route("/docInfo/:id").patch(async (req, res) => {
  try {
    const { id } = req.params;
    const { rait } = req.body;
    console.log("id, rait PATCH doctors", id, rait);
    // findOneAndUpdate - возвращает предыдущую версию, { new: true } - возвращает обновлённую
    const raiting = await doctorsModel.findByIdAndUpdate(
      { _id: id },
      {
        raiting: Math.floor(
          doctorsModel.raiting.reduce((acc, rait) => acc.raiting + rait, 0) /
            doctorsModel.raiting.length
        ),
      },
      { new: true }
    );
    console.log("raiting from back", raiting);
    res.json({ raiting });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
