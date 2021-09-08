const mongoose = require("mongoose");
const dbUrl = process.env.mongoUrl;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
function connect() {
  mongoose
    .connect(dbUrl, options)
    .then(() => console.log("MONGODB CONNECTED..."))
    .catch((err) => console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", err));
}
module.exports = { connect };
