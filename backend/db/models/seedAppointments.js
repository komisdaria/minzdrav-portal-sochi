const { connect, connection } = require("mongoose");
const Appointment = require("./appointmentModel");
require("dotenv").config();


async function seedAppointment() {
  connect(
    "mongodb+srv://User1:fktrctq95@cluster0.tnp6y.mongodb.net/medPortal",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

  const autoSeed = async (doctorSpecialization, date, time ) => {
    seedAppointment();

    let newDate = date;
    for (let i = 0; i < 31; i += 1) {
      newDate = newDate + 1;
      let newTime = time;
      for (let j = 0; j < 8; j++) {
          newTime = newTime + 1;

          const newAppoint = new Appointment({
            doctorSpecialization,
            date: `${newDate}.10.2021`,
            time: `${newTime}:00`,
            // status, 
            // comments,
            // patientsOms,
          })
          await newAppoint.save()
          
        }
      }
  console.log("done seedAppointment");
  await connection.close();

  }

  // autoSeed('Хирург', 1, 10);
  // autoSeed('Офтальмолог', 1, 10);
  // autoSeed('Терапевт', 1, 10);
  // autoSeed('Ортопед', 1, 10);
  // autoSeed('Психотерапевт', 1, 10);
  // autoSeed('Акушер - гинеколог', 1, 10);


  // const appointmentDB = [
  //   {
  //     doctorSpecialization: "Терапевт",
  //     date: '07.09.2021',
  //     time: '10.00',
  //     status: true,
  //     comments: ['прием аскорбинок 3 раза в день после еды'],
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  //   {
  //     doctorSpecialization: "Терапевт",
  //     date: '03.09.2021',
  //     time: '12.00',
  //     status: true,
  //     comments: ['Витамин Д 1 раз в день'],
  //     patientsOms: '613b17f7c6f184b3fa0b613f',
  //   },
  //   {
  //     doctorSpecialization: "Ортопед",
  //     date: '16.09.2021',
  //     time: '13.00',
  //     status: false,
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  //   {
  //     doctorSpecialization: "Хирург",
  //     date: '13.10.2021',
  //     time: '18.00',
  //     status: false,
  //     patientsOms: '613b17f7c6f184b3fa0b613f',
  //   },
  //   {
  //     doctorSpecialization: "Хирург",
  //     date: '18.09.2021',
  //     time: '19.00',
  //     status: false,
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  //   {
  //     doctorSpecialization: "Терапевт",
  //     date: '18.09.2021',
  //     time: '10.00',
  //     status: false,
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  //   {
  //     doctorSpecialization: "Терапевт",
  //     date: '18.09.2021',
  //     time: '17.00',
  //     status: false,
  //     patientsOms: '613b17f7c6f184b3fa0b613f',
  //   },
  //   {
  //     doctorSpecialization: "Ортопед",
  //     date: '14.09.2021',
  //     time: '17.00',
  //     status: false,
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  //   {
  //     doctorSpecialization: "Хирург",
  //     date: '13.09.2021',
  //     time: '16.00',
  //     status: false,
  //     patientsOms: '613b18bac6f184b3fa0b6142',
  //   },
  // ];

  // await Appointment.insertMany(appointmentDB);
  // console.log("done seedAppointment");
// }


// seedAppointment();
