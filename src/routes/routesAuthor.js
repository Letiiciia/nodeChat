const express = require('express');
const router = express.Router();
const authorController = require('../controller/author');
const auth = require('../model/auth');

router.post('/create', authorController.author_chat);
router.get('/authors', authorController.getAuthors);

module.exports = router;