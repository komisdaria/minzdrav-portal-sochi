const { connect, connection } = require("mongoose");
const Doctor = require("./doctorModel");


async function seed() {
  await connect('urlmongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const doctorDB = [
    {
      name: "Калинов Александр Васильевич",
      specialization: "Терапевт",
      work: [9-18],
      raiting: 4.6,
      reviews: ['быстро принимает', 'настоящий профи медицины'],
    },
    {
      name: "Денисова Марина Дмитриевна",
      specialization: "Терапевт",
      work: [10-16],
      raiting: 4.8,
      reviews: ['отличный врач'],
    },
    {
      name: "Калинов Александр Васильевич",
      specialization: "Ортопед",
      work: [12-14],
      raiting: 4.1,
      reviews: ['принимает долго',],
    },    {
      name: "Миронова Снеженна Денисовна",
      specialization: "Хирург",
      work: [16-20],
      raiting: 3.2,
      reviews: ['справку в санаторий не дает'],
    },
    
  ];

  await Doctor.insertMany(seed);
  console.log('done seed');
  await connection.close();
}

seed();