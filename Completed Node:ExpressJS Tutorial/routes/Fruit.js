const express = require('express');
const router = express.Router();

const {getAllFruit, getSingleFruit, addFruit, updateSingleFruit, deleteSingleFruit} = require('../controllers/Fruit.js');

router.route('/').get(getAllFruit).post(addFruit);
router.route('/:fruitID').get(getSingleFruit).put(updateSingleFruit).delete(deleteSingleFruit);

module.exports = router;