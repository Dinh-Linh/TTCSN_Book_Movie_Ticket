const Movie = require("../models/Movie.model")

class MovieController {
    // [GET] /api/v1/movies
    async index(req, res, err) {
        const movies = await Movie.find({});
        res.json(movies);
    }
}

module.exports = new MovieController