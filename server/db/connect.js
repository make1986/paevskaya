const mongoose = require("mongoose");

const config = require("../config");

mongoose.set("useFindAndModify", false);

module.exports.setUpConnect = function() {
  mongoose.connect(
    config.MONGO_URL,
    { useNewUrlParser: true }
  );
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log(`Mongo connected!`);
  });
};
