// src/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:articleName', commentController.getCommentsByArticleName);
router.post('/:articleName/add-comments', commentController.createComment);

module.exports = router;
