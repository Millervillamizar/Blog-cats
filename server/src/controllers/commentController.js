const Comment = require('../models/Comment');

// Obtener comentarios por nombre del artículo
exports.getCommentsByArticleName = async (req, res) => {
  try {
    const { articleName } = req.params;
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
    console.error('Error getting comments:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Crear un nuevo comentario
exports.createComment = async (req, res) => {
  try {
    const { articleName } = req.params;
    const { username, text } = req.body;
    const comment = await Comment.create({ article_name: articleName, author: username, content: text });
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Comment = require('../models/Comment');

// Editar un comentario existente
exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    const updatedComments = await Comment.update(commentId, { content: text });
    if (updatedComments.length === 0) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updatedComments);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Eliminar un comentario existente
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const id = parseInt(commentId, 10); // Asegúrate de que el id es un número
    await Comment.delete(id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
