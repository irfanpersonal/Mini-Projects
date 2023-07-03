const express = require('express');
const router = express.Router();

const {getAllGames, createGame} = require('../controllers/gameController.js');
const {uploadGameImage} = require('../controllers/uploadGameImageController.js');

router.route('/').get(getAllGames).post(createGame);
router.route('/uploads').post(uploadGameImage);

module.exports = router;