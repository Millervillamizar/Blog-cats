// src/controllers/articleController.js
const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  res.json(article);
};

exports.createArticle = async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
};

