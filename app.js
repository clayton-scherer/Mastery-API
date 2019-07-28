const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const actorRouter = require("./src/server/routes/actor-router");
const categoryRouter = require("./src/server/routes/category-router");
const movieRouter = require("./src/server/routes/movie-router");
const cors = require("cors");
const app = express();
require("./src/server/models/db");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/actors", actorRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/movies", movieRouter);

module.exports = app;
