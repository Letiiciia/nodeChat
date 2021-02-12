const express = require('express');
const router = express.Router();
const chatController = require('../controller/chat');

router.post('/createchatroom', chatController.creatRoom);
router.get('/chatmessages/:id', chatController.chatMessages);

module.exports = router;
