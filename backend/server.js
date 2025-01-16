const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (request, response) => {
    response.send("Server connected!!")
})

port = process.env.PORT

app.listen(port, () => (
    console.log(`Server is running on http://localhost:${port}`)
))