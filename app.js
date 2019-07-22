const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/server/models/db");

const actorRouter = require("./src/server/routes/actor-router");
const movieRouter = require("./src/server/routes/movie-router");
const categoryRouter = require("./src/server/routes/category-router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/actors", actorRouter);
app.use("/api/movies", movieRouter);
app.use("/api/categories", categoryRouter);

module.exports = app;
