const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Must Provide Fruit Name']
    },
    price: {
        type: Number,
        require: [true, 'Must Provide Fruit Price']
    },
    color: {
        type: String,
        require: [true, 'Must Provide Fruit Color']
    }
});

module.exports = mongoose.model('fruits', fruitSchema);