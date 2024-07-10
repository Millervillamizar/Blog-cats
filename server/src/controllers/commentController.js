const Comment = require('../models/Comment');

// Obtener comentarios por nombre del artículo
exports.getCommentsByArticleName = async (req, res) => {
  try {
    const { articleName } = req.params;
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Editar un comentario existente
exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    await Comment.update({ id: commentId }, { content: text });
    const updatedComment = await Comment.findById(commentId);
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Eliminar un comentario existente
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    await Comment.delete({ id: commentId });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
