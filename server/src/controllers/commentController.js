// src/controllers/commentController.js
const Comment = require('../models/Comment');

exports.getCommentsByArticleName = async (req, res) => {
  try {
    const { articleName } = req.params;
    const comments = await Comment.findByArticleName(articleName);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
