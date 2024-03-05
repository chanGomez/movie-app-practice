const express = require("express")
const movies = express.Router()
const { getAllMovies } = require("../queries/movies")

movies.get("/", async (req, res) =>{
    try{
        const allMovies = await getAllMovies();
        res.status(200).json({payload: allMovies})
    }catch{
        res.status(404).json({payload: error })
    }
})

module.exports = movies;