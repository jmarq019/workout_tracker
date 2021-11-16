const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the excercise."
  },
  weight: {
    type: Number,
    required: "Enter the amount of weight."
  },
  sets: {
    type: Number,
    required: "Enter the number of sets."
  },
  reps: {
    type: Number,
    required: "Enter the number of reps."
  },
    duration: {
      type: Number,
      required: "Enter the duration in minutes"
    },
    distance: {
      type: Number,
      required: "Enter distance in miles"
    },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;