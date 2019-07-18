const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/server/models/db");

const movieRouter = require("./src/server/routes/movie-router");
const actorRouter = require("./src/server/routes/actor-router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/movies", movieRouter);
app.use("/actors", actorRouter);

module.exports = app;
