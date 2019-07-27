const mongoose = require("mongoose");

module.exports = mongoose.model("Actor", {
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String }
});
