const express = require('express');
const router = express.Router();
const authorController = require('../controller/author');
const passport = require('passport');

router.get(
    '/authors', 
    passport.authenticate('bearer', {session: false}), 
    authorController.getAuthors
);

router.post('/create', authorController.author_chat);

module.exports = router;