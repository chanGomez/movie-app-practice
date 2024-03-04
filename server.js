const app = require("/app")
require("dotenv").config()

const PORT = process.env.PORT

app.listen(3000, () => {
    console.log(`Listen on PORT: ${PORT}`)
})