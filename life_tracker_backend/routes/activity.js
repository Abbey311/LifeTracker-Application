const express = require("express")
const router = express.Router()

router.post("/exercise", async (req, res, next) => {
    try {
        // create a new exercise
        } catch(err) {
            next(err)
        }
})

router.get("/exercise", async (req, res, next) => {
    try {
        // list all exercises
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

router.post("/sleep", async (req, res, next) => {
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