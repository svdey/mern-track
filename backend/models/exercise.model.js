const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercise = new Schema(
  {
    username: { type: String, require: true },
    description: { type: String, require: true },
    duration: { type: Number, require: true },
    date: { type: Date, require: true },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exercise);

module.exports = Exercise;
