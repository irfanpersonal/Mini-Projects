const express = require('express');
const router = express.Router();

const {login} = require('../controllers/auth.js');

router.route('/').post(login);

module.exports = router;