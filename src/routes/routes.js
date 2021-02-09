const express = require('express');
const router = express.Router();
const chatController = require('../controller/chat');

router.post('/post', chatController.adc);

module.exports = router
