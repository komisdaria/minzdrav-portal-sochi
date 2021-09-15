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
    console.log('--------->>>',id);
    const { rait } = req.body;
    console.log("id, rait PATCH doctors", id, rait);
    // findOneAndUpdate - возвращает предыдущую версию, { new: true } - возвращает обновлённую
    const currentModel = await doctorsModel.findByIdAndUpdate(
      { _id: id },
      { $push: { raiting: rait } },
      { new: true },
    );
    const oldRaiting = currentModel.raiting;
    const newCurrentRaiting = Math.floor(oldRaiting.reduce((acc, num) => acc + num, 0) / oldRaiting.length);
    const updateRait = await doctorsModel.findByIdAndUpdate(
      { _id: id },
      { sumRaiting: newCurrentRaiting },
      { new: true },
    )
    res.json({ updateRait });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
