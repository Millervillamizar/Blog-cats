const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:articleName', commentController.getCommentsByArticleName);
router.post('/:articleName/add-comments', commentController.createComment);
router.put('/:commentId/edit', commentController.updateComment);
router.delete('/:commentId/delete', commentController.deleteComment);

module.exports = router;

