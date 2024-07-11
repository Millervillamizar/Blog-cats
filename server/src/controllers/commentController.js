const Comment = require('../models/Comment');

// Obtener comentarios por nombre del artículo
exports.getCommentsByArticleName = async (req, res) => {
  try {
    const { articleName } = req.params;
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear un nuevo comentario
exports.createComment = async (req, res) => {
  try {
    const { articleName } = req.params;
    const { userId, author, text } = req.body;

    // Validación de longitud del comentario
    if (text.length < 10 || text.length > 500) {
      return res.status(400).json({ error: 'El comentario debe tener entre 10 y 500 caracteres' });
    }

    const comment = await Comment.create({ article_name: articleName, user_id: userId, author, content: text });
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
    console.error('Error al crear el comentario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Editar un comentario existente
exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { userId, text } = req.body;

    // Verificar que el comentario pertenece al usuario
    const comment = await Comment.findById(commentId);
    if (comment.user_id !== userId) {
      return res.status(403).json({ error: 'No tienes permiso para editar este comentario' });
    }

    const updatedComments = await Comment.update(commentId, { content: text });
    if (updatedComments.length === 0) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    res.json(updatedComments);
  } catch (error) {
    console.error('Error al actualizar el comentario:', error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Eliminar un comentario existente
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { userId } = req.body;

    // Verificar que el comentario pertenece al usuario
    const comment = await Comment.findById(commentId);
    if (comment.user_id !== userId) {
      return res.status(403).json({ error: 'No tienes permiso para eliminar este comentario' });
    }

    await Comment.delete(commentId);
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

