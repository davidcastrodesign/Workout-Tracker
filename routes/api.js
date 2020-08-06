const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
