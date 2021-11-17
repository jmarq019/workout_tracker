const router = require('express').Router();
const {Workout} = require('./models')


router.get('/api/workouts', async (req, res) =>{
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




module.exports = router;