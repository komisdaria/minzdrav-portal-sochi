const mailer = require('./mailRouter')
const express = require("express");
const router = express.Router();
const userModel = require("../db/models/userModel");
const appointsmentModel = require("../db/models/appointmentModel");


router.route("/register").post(async (req, res) => {
  try {
    const { name, email, password, repeatPassword, oms, lastName, dateBorn } =
      req.body;

    const userCreated = await userModel.findOne({ email });
    if (name.length === 0) {
      return res.status(500).json({ message: "Заполните имя" });
    }
    if (lastName.length === 0) {
      return res.status(500).json({ message: "Заполните фамилию" });
    }
    if (email.length === 0) {
      return res.status(500).json({ message: "Заполните почту" });
    }
    if (password.length === 0) {
      return res.status(500).json({ message: "Введите пароль" });
    }
    if (oms.toString().length !== 16) {
      return res.status(500).json({ message: "Введите корректный номер ОМС" });
    }

    if (userCreated) {
      return res.status(500).json({ message: "Такой юзер уже существует" });
    }
    if (password !== repeatPassword) {
      return res.status(500).json({ message: "Пароли не совпадают" });
    }
    const user = await userModel.create({
      name,
      email,
      password,
      repeatPassword,
      oms,
      lastName,
      dateBorn,
    });

    const userId = user._id.toString();
    req.session.user = user;
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: "Ошибка register" });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "Такого юзера не существует" });
    }
    if (password.length === 0) {
      return res.status(500).json({ message: "заполните это поле" });
    }
    if (user.password !== password) {
      return res.status(500).json({ message: "Не вверный пароль" });
    }
    if (email.length === 0) {
      return res.status(500).json({ message: "Поле не должно быть пустым." });
    }
    const userId = user._id.toString();
    req.session.user = user;
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Ошибка login" });
  }
});

router.route("/checkUser").post(async (req, res) => {
  try {
    if (req.session.user) {
      const user = req.session.user;
      res.status(200).json({ message: "Пользователь авторизован", user });
    } else {
      res.status(200).json({ message: "Пользователь не авторизован" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Ошибка check" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  return res.status(200).json({ message: "юзер покинул аккаунт" });
});

router.post("/update", async (req, res) => {
  try {
    const { _id } = req.session.user;
    const { id } = req.body;
    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      { $push: { appoint: id } },
      { new: true }
    );
    const findAppoint = await appointsmentModel.findById(id)
    const message = {
      to: updateUser.email,
      subject: `Запись в клинику Сочи`,
      html: `
      <h3>Уважаемый,${updateUser.name} ${updateUser.lastName}</h3>
          <ul>
          <li>Вы записались к ${findAppoint.doctorSpecialization}!</li>
          <li>Дата: ${findAppoint.date},</li>
          <li>Время: ${findAppoint.time}.</li>
          </ul>
          <h4>Желаем вам здоровья!</h4>`,
    };
    mailer(message);
    return res.json({ updateUser });
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: "Ошибка " });
  }
});

router.post("/account", async (req, res) => {
  try {
    const { _id } = req.session.user;
    const populateUser = await userModel.findById(_id).populate("appoint");
    console.log(populateUser.appoint);
    return res.json(populateUser.appoint);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: "Ошибка " });
  }
});

module.exports = router;
