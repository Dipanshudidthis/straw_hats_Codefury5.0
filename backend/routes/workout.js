const express = require('express');

const router = express.Router();

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers');

const requireAuth = require('../middleware/requireAuth');   //calling auth function here


//GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

router.use(requireAuth);  //this will take care of authentication of all the function defined below this
//POST a new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);

//UPDATE a workout
router.patch('/:id', updateWorkout);


module.exports = router;