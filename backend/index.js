const express = require("express")

const routeAPI = require('./api/v1/routes/index.route')

require("dotenv").config()


const app = express()

// connect DB
const database = require("./config/database/index")
database.connectDB();



// routes
routeAPI(app)

// listening PORT 3001
app.listen(process.env.PORT, () => {
    console.log(`app listening ${process.env.PORT}`)
})