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
    // findOneAndUpdate - возвращает предыдущую версию, { new: true } - возвращает обновлённую
    const currentModel = await doctorsModel.findByIdAndUpdate(
      { _id: id },
      { $push: { raiting: rait } },
      { new: true },
    );
    const oldRaiting = currentModel.raiting;
    const newCurrentRaiting = (oldRaiting.reduce((acc, num) => acc + num, 0) / oldRaiting.length).toFixed(2);
    const updateRait = await doctorsModel.findByIdAndUpdate(
      { _id: id },
      { sumRaiting: newCurrentRaiting },
      { new: true },
    )
    console.log("updateRait", updateRait.raiting);
    console.log("updateRait", updateRait.sumRaiting);
    res.json({ updateRait });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.route("/currentDoc").post(async (req, res) => {
  try {
    const { id } = req.body;
    const currentModel = await doctorsModel.findById({ _id: id });
    res.json({ currentModel });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
