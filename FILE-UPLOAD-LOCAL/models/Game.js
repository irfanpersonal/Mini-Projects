const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Game Name'],
        minLength: 5
    },
    rating: {
        type: Number,
        required: [true, 'Must Provide Game Rating']
    },
    image: {
        type: String,
        required: [true, 'Must Provide Game Image']
    }
});

module.exports = mongoose.model('games', gameSchema);