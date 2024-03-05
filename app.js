const express = require("express");
const app = express();
const cors = require("cors")
const moviesController = require("./controllers/movies")

app.use(cors())
app.use(express.json())

//Routes
app.use("/movies", moviesController)

app.get("/", (req, res) =>{
    res.send("Welcome to Movie Saver")
})

app.get("*", (req, res)=> {
    res.status(404).send("Request does not exsits")
})


//EXPORT
module.exports = app;