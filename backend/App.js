require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { connect } = require("./db/options");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const userRouter = require("../backend/Router/userRouter");
const doctorRouter = require("../backend/Router/doctorRouter");
const appointmentRouter = require("./Router/appointmentRouter");

const App = express();

// указываем hbs в качестве движка для рендоринга
App.use(morgan("dev")); // записываем в консоль запросы
App.use(express.json()); //распарсит тело запроса из формата json
App.use(express.urlencoded({ extended: true })); // распарсит тело запроса из формата form data
App.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const options = {
  // указываем где храним сессии
  store: MongoStore.create({
    mongoUrl: process.env.mongoUrl,
  }),
  // название куки
  key: "sid",
  // секретное слово с помощью которго будет происходить шифрование
  secret: "jengjengejrnglkfnvmldmlkwdnwoj",
  resave: false,
  saveUninitialized: false,
  cookie: {
    // указываем через сколько протухнет куки
    expires: 1000 * 60 * 60,
    // указываем что это httpOnly кука и её нельзя получить из клиентсокого JS
    httpOnly: true,
  },
};

// подключаем мидлвары для работы сессий
App.use(cookieParser());
App.use(session(options));

App.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
App.use(express.json());

App.use((req, res, next) => {
  const { user } = req.session;
  if (user) {
    res.locals.user = user;
  }
  next();
});

App.use("/", userRouter);
App.use("/doctors", doctorRouter);
App.use("/", appointmentRouter);

const PORT = 8080;

const start = () => {
  App.listen(PORT, () => {
    connect();
    console.log(`server started on ${PORT}`);
  });
};
start();
