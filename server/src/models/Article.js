// src/models/Article.js
const knex = require('../db/knex');

class Article {
  static async findAll() {
    return knex('articles').select('*');
  }

  static async findById(id) {
    return knex('articles').where({ id }).first();
  }

  static async create(article) {
    return knex('articles').insert(article).returning('*');
  }
}

module.exports = Article;

// src/models/Comment.js
const knex = require('../db/knex');

class Comment {
  static async findByArticleId(articleId) {
    return knex('comments').where({ article_id: articleId }).select('*');
  }

  static async create(comment) {
    return knex('comments').insert(comment).returning('*');
  }
}

module.exports = Comment;
