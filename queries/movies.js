const db = require("../db/dbConfig.js")

const getAllMovies = async () => {
    try{
        const movies = await db.any("SELECT * FROM movies")
        return movies
    }catch(e){
        return e
    }
}

const getMovieById = async ( movieId ) => {
    try{
        const movie = await db.one(`SELECT * FROM movies WHERE id = $1`, movieId )
        return movie
    }catch(e){
        return e
    }
}

const createMovie = async ({name, description, year, favorite}) => {
    try{
        const newMovie = await db.one("INSERT INTO movies (name, description, year, favorite) VALUES ($1, $2, $3, $4) RETURNING *", [name, description, year, favorite])
        return newMovie
    }catch(e){
        return error
    }
}

const updateMovieById = async (id, body) => {
    const {name, description, year, favorite} = body

    try {
        const updateMovie = await db.one("UPDATE movies SET name=$1, description=$2, year=$3, favorite=$4 WHERE id=$5 RETURNING *", [name, description, year, favorite, id]);
        return updateMovie
    } catch (error) {
        return error
    }

}

const deleteMovie = async (id) => {
    try{
        const movie = await db.one("DELETE FROM movies WHERE id=$1 RETURNING *", id)
        return movie
    }catch (error) {
        return error
    }

}
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovieById,
    deleteMovie
    
}