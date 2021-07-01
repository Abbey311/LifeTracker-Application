const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Exercise {
    static async listExercises(){
        const results = await db.query(
            `
            SELECT e.id,
                   e.name,
                   e.category AS "category",
                   e.duration AS "duration",
                   e.intensity AS "intensity",
                   e.user_id AS "user_id"
            FROM exercise AS e
                JOIN users AS u on u.id = e.user_id
            `
        )
        return results.rows
    }

static async addExercise({ exercise, user }){
    const requiredFields = ['name', 'category']
    requiredFields.forEach(field => {
        if (!exercise.hasOwnProperty(field)){
            throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })
        console.log(user.email)
    const results = await db.query(
        `
        INSERT INTO exercise (name, category, duration, intensity, user_id)
        VALUES($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
        Returning id,
                  name,
                  category AS "Category",
                  duration AS "Duration",
                  intensity AS "Intensity",
                  user_id AS "userId"
        
        `, [exercise.name, exercise.category, exercise.duration, exercise.intensity, user.email] 
        )
    return results.rows[0] 
    }

}


module.exports = Exercise