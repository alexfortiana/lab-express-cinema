const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((response) =>{
        res.render("movies", {response})

    })
    .catch((err) =>{
        next(err)
    })
})

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then((response) =>{
        console.log(response)
        res.render("movies-info", {response})

    })
    .catch((err) =>{
        next(err)
    })

})

module.exports = router;
