const express = require("express"); //Dependency
const app = express();// configuration
const cors = require("cors")

app.use(cors())

//Routes
app.get("/", (req, res) =>{
    res.send("Welcome to Movie Saver")
})

app.get("*", (req, res)=> {
    res.status(404).send("Request does not exsits")
})


//EXPORT
module.exports = app;