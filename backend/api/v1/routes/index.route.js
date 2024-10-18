const movie = require('./movie.route')
const user = require('./user.route')


module.exports = (app) => {
    app.use("/api/v1/movie", movie)
    app.use("/api/v1/user", user)
}