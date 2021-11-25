const router = require('express').Router();
const Workout = require('../models/Workout.js')



//getting workout duration in aggregate
router.get('/workouts', async (req, res) =>{
    try{
        const workouts = await Workout.aggregate([
        {
            $addFields : { 
                totalDuration: {
                    $sum: "$exercises.duration"
                }

            }
        }
        ])
        res.json(workouts);
    } catch (err) {
        res.json(err);
    }
});

//getting workout duration in aggregate in a certain range
router.get('/workouts/range', async (req, res) =>{
    try{
        const workouts = await Workout.aggregate([
        {
            $addFields : { 
                totalDuration: {
                    $sum: "$exercises.duration"
                }

            }
        }
        ]).sort({_id:-1}).limit(7)
        res.json(workouts);
    } catch (err) {
        res.json(err);
    }
});

//create a new workout
router.post('/workouts', async ({body}, res)=>{
    try{
    const myWorkout = await Workout.create({})
    res.json(myWorkout)
    } catch (err) {
        res.json(err);
    }

});

//add a new excercise
router.put('/workouts/:id', async ({body, params}, res) =>{
    try{
        const myWorkout = await Workout.findByIdAndUpdate(
        params.id, 
        { $push: { exercises: body } }, 
        { new: true, runValidators: true })
        res.json(myWorkout)
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;