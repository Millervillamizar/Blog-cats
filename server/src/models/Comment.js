const knex = require('../db/knex');

class Comment {
  static async findByArticleName(articleName) {
    return knex('comments').where({ article_name: articleName }).select('*');
  }

  static async create(comment) {
    return knex('comments').insert(comment).returning('*');
  }

  static async findById(commentId) {
    return knex('comments').where({ id: commentId }).first();
  }

  static async update(commentId, newData) {
    return knex('comments').where({ id: parseInt(commentId, 10) }).update(newData).returning('*');
  }

  static async delete(commentId) {
    return knex('comments').where({ id: parseInt(commentId, 10) }).del();
  }
}

module.exports = Comment;






