const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/server/models/db");

const indexRouter = require("./src/server/routes/index");
const usersRouter = require("./src/server/routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
