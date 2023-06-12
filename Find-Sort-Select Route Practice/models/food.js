const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Must Provide Food Name']
    },
    price: {
        type: String,
        require: [true, 'Must Provide Food Price']
    },
    color: {
        type: String,
        require: [true, 'Must Provide Food Color']
    }
});

module.exports = mongoose.model('foods', foodSchema);