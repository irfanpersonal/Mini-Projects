const express = require('express');
const router = express.Router();

const {getAllFood, getAllFoodStatic} = require('../controllers/food.js');

router.route('/').get(getAllFood);
router.route('/static').get(getAllFoodStatic);

module.exports = router;