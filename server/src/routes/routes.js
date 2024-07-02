// server/src/routes/routes.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Ruta para agregar un comentario a un artículo específico
router.post('/articles/:articleName/add-comment', articleController.addComment);

module.exports = router;


