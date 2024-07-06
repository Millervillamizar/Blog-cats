// src/routes/articleRoutes.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', articleController.createArticle);

module.exports = router;


