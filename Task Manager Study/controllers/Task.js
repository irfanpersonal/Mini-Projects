const Task = require('../models/Task.js');
const asyncWrapper = require('../middleware/asyncWrapper.js');
const {createCustomAPIError} = require('../errors/custom-error.js');

const getAllTasks = asyncWrapper(async(req, res) => {   
    const tasks = await Task.find();
    if (tasks.length !== 0) {
        return res.status(200).json({status: true, code: 1, msg: 'Successfully retrieved all Tasks', data: tasks});
    }
    return res.status(200).json({status: true, code: 1, msg: 'No Tasks In Database', data: []});
});

const addTask = asyncWrapper(async(req, res, next) => {
    const {name} = req.body;
    if (name) {
        const task = await Task.create({name: name});
        return res.status(200).json({status: true, code: 1, msg: 'Successfully added Task', data: task});
    }
    return next(createCustomAPIError('Please Enter Name into Request Body', 400));
});

const getSingleTask = asyncWrapper(async(req, res, next) => {
    const {taskID} = req.params;
    if (taskID) {
        const task = await Task.findOne({_id: taskID});
        if (task === null) {
            return next(createCustomAPIError('Failed to find Task with specific _id', 400));  
        }
        return res.status(200).json({status: true, code: 1, msg: 'Successfully retrieved Single Task', data: task});
    }
    return next(createCustomAPIError('Something went wrong', 400));
});

const updateSingleTask = asyncWrapper(async(req, res, next) => {
    const {taskID} = req.params;
    const {name, completed} = req.body;
    if (taskID) {
        const task = await Task.findOne({_id: taskID});
        if (task === null) {
            return next(createCustomAPIError('Failed to retrieve specific ID', 400));
        }
        if (completed) {
            task.completed = completed;
        }
        if (name) {
            task.name = name;
        }
        await task.save();
        return res.status(200).json({status: true, code: 1, msg: 'Successfully Retrieved and Updated Task', data: task});
    }
    return next('Failed To Provide Task ID, Name, or Completed In Req.body', 400);
});

const deleteSingleTask = asyncWrapper(async(req, res, next) => {
    const {taskID} = req.params;
    if (taskID) {
        const task = await Task.deleteOne({_id: taskID});
        if (task.deletedCount) {
            return res.status(200).json({status: true, code: 1, msg: 'Successfully deleted Task with specific ID', data: task});
        }
        return next('Failed to delete Task with specific ID', 400);
    }
});

module.exports = {getAllTasks, addTask, getSingleTask, updateSingleTask, deleteSingleTask};