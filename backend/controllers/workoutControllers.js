const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//get all workouts
const getWorkouts = async (req, res) => {
    //now we will only display the workouts who are atttached to the current user_id
    const workouts = await Workout.find({}).sort({ createdAt: -1 })   //'{}' empty brackets means I need all workouts, sorting the workouts in the order they were created
    res.status(200).json(workouts);
}


//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params         //all route properties are stored on params properties

    if(!mongoose.Types.ObjectId.isValid(id)){   //to find if the requested workout is valid
        return res.status(404).json({error: "No such Workout"});  
    }

    const workout = await Workout.findById(id);
    
    if (!workout) {
        return res.status(404).json({ error: "No such Workout" });
    }

    res.status(200).json(workout);
}

// create a workout
const createWorkout = async (req, res) => {

    //adding docs to the database here
    const { title, description } = req.body

    let emptyFields = [];  //making this array of all empty input fields

    if(!title){
        emptyFields.push('title');
    }
    if(!description){
        emptyFields.push('description');
    }
    if(emptyFields.length > 0){  //checking if there is even one empty input field and if there is then return error
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields});
    }

    try {
        const user_id = req.user._id;    // we have access to user ID as we have defined it in requireauth file
        const workout = await Workout.create({ title, description, user_id })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete a workout
const deleteWorkout = async (req,res)=>{
    const { id } = req.params         //all route properties are stored on params properties

    if(!mongoose.Types.ObjectId.isValid(id)){   //to find if the requested workout is valid
        return res.status(404).json({error: "No such Workout"});  
    }

    const workout = await Workout.findByIdAndDelete({_id:id});

    if (!workout) {
        return res.status(404).json({ error: "No such Workout" });
    }

    res.status(200).json(workout);

}


// update a workout
const updateWorkout = async (req, res) => {

    const { id } = req.params         //all route properties are stored on params properties

    if(!mongoose.Types.ObjectId.isValid(id)){   //to find if the requested workout is valid
        return res.status(404).json({error: "No such Workout"});  
    }

    const workout = await Workout.findByIdAndUpdate({_id:id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: "No such Workout" });
    }

    res.status(200).json(workout);

}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}