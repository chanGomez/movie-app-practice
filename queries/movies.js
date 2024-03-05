const db = require("../db/dbConfig.js")

const getAllMovies = async () => {
    try{
        const movies = await db.any("SELECT * FROM movies")
        return movies
    }catch(e){
        return e
    }
}
module.exports = {
    getAllMovies
}