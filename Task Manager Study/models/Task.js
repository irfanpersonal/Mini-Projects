const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Task Name'],
        trim: true,
        minLength: [2, 'Must Be At The Very Least 2 Characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('task', taskSchema);