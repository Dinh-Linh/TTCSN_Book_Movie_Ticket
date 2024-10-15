const mongoose = require('mongoose')

const Movie = new mongoose.Schema(
    {
        name: String,
        quantity: Number
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Movie", Movie)