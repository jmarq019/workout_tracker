const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
        name: {
          type: String,
          trim: true,
          required: "Enter a name for the excercise."
        },
        type: {
          type: String,
          trim: true,
          required: "Enter exercise type"
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
      },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;