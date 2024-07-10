// src/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:articleName', commentController.getCommentsByArticleName);
router.post('/:articleName/add-comments', commentController.createComment);
router.put('/:commentId/edit', commentController.updateComment); // Ruta para editar comentario
router.delete('/:commentId/delete', commentController.deleteComment); // Ruta para eliminar comentario

module.exports = router;
