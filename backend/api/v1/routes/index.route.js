const movie = require('./movie.route')


module.exports = (app) => {
    app.use("/api/v1/movie", movie)
}