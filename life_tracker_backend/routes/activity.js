const express = require("express")
const Exercise = require("../models/exercise")
const Nutrition = require("../models/nutrition")
const Sleep = require("../models/sleep")
const Activity = require("../models/activityFeed")
const security = require("../middleware/security")
const router = express.Router()

router.post("/exercise", security.requireAuthenticatedUser, async (req, res, next) => {
    console.log("Something")
    try {
        // create a new exercise
        const { user } = res.locals
        console.log(user)
        const exercise = await Exercise.addExercise({ user, exercise: req.body })
        return res.status(201).json({ exercise })  
        } catch(err) {
            next(err)
        }
})

router.get("/exercise", async (req, res, next) => {
    try {
        // list all exercises
        const exercises = await Exercise.listExercises()
        return res.status(200).json({ exercises })
        } catch(err) {
            next(err)
        }
})

router.post("/nutrition", async (req, res, next) => {
    try {
        // record nutrition 
        } catch(err) {
            next(err)
        }
})

router.get("/nutrition", async (req, res, next) => {
    try {
        // list all food
        } catch(err) {
            next(err)
        }
})

router.post("/sleep", async (req, res, next) => {
    try {
        // log sleep
        } catch(err) {
            next(err)
        }
})

router.get("/sleep", async (req, res, next) => {
    try {
        // list time slept
        } catch(err) {
            next(err)
        }
})
router.get("/activity", async (req, res, next) => {
    try {
        // view activity feed
        } catch(err) {
            next(err)
        }
})




module.exports = router