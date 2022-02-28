const {Schema} = require('mongoose');

const moviesSchema = new Schema(
    {
        photo: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            required: true
        }
    }
);

module.exports = moviesSchema;