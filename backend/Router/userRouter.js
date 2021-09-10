const express = require("express");
const router = express.Router();
const userModel = require("../db/models/userModel");

router.route("/register").post(async (req, res) => {
  try {
    const { name, email, password, repeatPassword, oms } = req.body;
    const userCreated = await userModel.findOne({ email });

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
    });
    
    const userId = user._id.toString();
    console.log(user);
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
    if (user.password !== password) {
      return res.status(500).json({ message: "Не вверный пароль" });
    }
    const userId = user._id.toString();
    req.session.user = user;
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Ошибка login" });
  }
});

router.get("/logout", (req, res) => {
  console.log('1',req.session);
  req.session.destroy();
  console.log('2',req.session);
  res.clearCookie("sid");
  return res.status(200).json({ message: "юзер покинул аккаунт" });
});
module.exports = router;
