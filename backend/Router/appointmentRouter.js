const express = require("express");
const router = express.Router();
const Appointment = require("../db/models/appointmentModel");

router
  .route("/appointments")
  .get(async (req, res) => {
  try {
    let allAppointments = await Appointment.find().lean();
    res.status(200).json({
      allAppointments: allAppointments.map(({ _id, ...rest }) => ({ ...rest, id: _id })),
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})
  .post(async (req, res) => {
    try {
      const { appointment } = req.body;
      const appointmentMy = await Appointment.create({
        doctorSpecialization,
        date,
        time,
        status: false,
        comments,
        patientsOms,
      });
      console.log('appointmentMy post router /', appointmentMy);
      res.json({ appointmentMy });
    } catch (error) {
      console.log('smthg wrong with router / post', error);
      res.sendStatus(500);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    await Appointment.findOneAndDelete(id);
    // console.log('deletedAppointment', deletedAppointment);
    res.json({ removed: true });
  } catch (error) {
    console.log('smthg wrong with del router ', error);
    res.sendStatus(500);
  }
});

router.put('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log('id, status PUT appointment', id, status);
    // findOneAndUpdate - возвращает предыдущую версию, { new: true } - возвращает обновлённую
    const appointment = await Appointment.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true },
    );
    console.log('appointment from back', appointment);
    res.json({ appointment });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router
  .route('/:id/edit')
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const selectDoctorSpec = req.body.inputEdit;
      const changeDate = req.body.inputChangeDate;
      const changeTime = req.body.inputChangeTime;
      const comments = req.body.inputComments;

      console.log('selectDoctorSpec back', selectDoctorSpec);
      const appointment = await Appointment.findByIdAndUpdate(
        { _id: id },
        { selectDoctorSpec },
        { changeDate },
        { changeTime },
        { comments },
        { new: true },
      );
      console.log('appointment back edit', appointment);
      res.json({ appointment });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;