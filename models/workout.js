const mongoose = require('mongoose');

const Schema = mongooose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exrcises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter an exercise type',
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter an exercise name',
        },
        duration: {
          type: Number,
          required: 'Enter an exercise duration in minutes',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      // any virtual properties when data is requested included
      virtuals: true,
    },
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
