const mongoose = require("mongoose");

module.exports = mongoose.model("Actor", {
  firstName: { type: String },
  lastName: { type: String },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  image: { type: String }
});
