const router = require('express').Router()
const exercise = require('../models')

router.get('/', async (req, res) => {

    res.render('stats');

});

router.get('/exercise', (req, res) =>{
    
    res.render('exercise')

});

router.get('/stats', (req, res) =>{
    
    try{
        const exerciseData = await db.exercise.findAll();

        const post = exerciseData.map((post) => post.get({ plain:true }))

        res.render('/index.html', {
            post, logged_in: req.session.logged_in
        })
    }
    catch (err){
        res.status(500).json(err)
    }

});


module.exports = router;