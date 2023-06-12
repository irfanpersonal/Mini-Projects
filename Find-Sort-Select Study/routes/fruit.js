const express = require('express');
const router = express.Router();

const {getAllFruitStatic, getAllFruit} = require('../controllers/fruit.js');

router.route('/').get(getAllFruit);
router.route('/static').get(getAllFruitStatic);

module.exports = router;