const express = require("express")
const movies = express.Router()
const { getAllMovies, getMovieById, createMovie, updateMovieById, deleteMovie} = require("../queries/movies")

movies.get("/", async (req, res) =>{
    try{
        const allMovies = await getAllMovies();
        res.status(200).json({payload: allMovies})
    }catch{
        res.status(404).json({payload: error })
    }
})

movies.get("/:movieId", async  (req, res) => {
    const {movieId} = req.params

    try{
        const foundMovie = await getMovieById(movieId)
        res.status(200).json({payload: foundMovie})
    }catch(e){
        res.status(404).json({payload: e})
    }
})

movies.post("/", async (req, res) => {
    const body = req.body;

    try {
        const newMovie = await createMovie(body)
        res.status(201).json({payload: newMovie})
    } catch(e) {
        res.status(404).json({payload: e})
    }
})

movies.put("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    try {
    const updatedMoive = await updateMovieById(id, body)
        res.status(201).json({payload: updatedMoive})
    } catch (e) {
        res.status(404).json({payload: e})
    }
})

movies.delete("/:id", async (req, res) => {
    const {id} = req.params

    try {
        const movie = await deleteMovie(id)
        res.status(200).json({payload: movie})

    } catch (error) {
        res.status(404).json({payload: e})
    }
})



module.exports = movies;