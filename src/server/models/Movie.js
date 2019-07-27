const mongoose = require("mongoose");

module.exports = mongoose.model("Movie", {
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  director: { type: String },
  image: { type: String },
  rating: { type: Number, default: 0},
  title: { type: String }
});
