const mongoose = require("mongoose");

const { username, password } = require("../config/db");

const dbConnection = `mongodb+srv://${username}:${password}@mastery-api-3dgnh.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbConnection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});
