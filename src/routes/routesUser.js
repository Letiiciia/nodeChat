const userController = require('../controller/userController');
const express = require('express');
const router = express.Router();
const userControlle = require('../controller/userController');


router.post('/sign', userControlle.login);

module.exports = router;