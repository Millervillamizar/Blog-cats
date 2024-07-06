// src/models/Comment.js
const knex = require('../db/knex');

class Comment {
  static async findByArticleName(articleName) {
    return knex('comments').where({ article_name: articleName }).select('*');
  }

  static async create(comment) {
    return knex('comments').insert(comment).returning('*');
  }
}

module.exports = Comment;


