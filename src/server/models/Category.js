const mongoose = require("mongoose");

module.exports = mongoose.model("Category", {
  name: { type: String },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});
