const express = require('express');
const router = express.Router();

const {getAllTasks, addTask, getSingleTask, updateSingleTask, deleteSingleTask} = require('../controllers/Task.js');

router.route('/').get(getAllTasks).post(addTask);
router.route('/:taskID').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask);

module.exports = router;