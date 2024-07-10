const knex = require('../db/knex');

class Comment {
  // Encontrar comentarios por nombre del artículo
  static async findByArticleName(articleName) {
    return knex('comments').where({ article_name: articleName }).select('*');
  }

  // Crear un nuevo comentario
  static async create(comment) {
    return knex('comments').insert(comment).returning('*');
  }

  // Encontrar comentario por ID
  static async findById(commentId) {
    return knex('comments').where({ id: commentId }).first();
  }

  // Actualizar un comentario
  static async update(commentId, newData) {
    return knex('comments').where({ id: commentId }).update(newData).returning('*');
  }

  // Eliminar un comentario
  static async delete(commentId) {
    return knex('comments').where({ id: commentId }).del();
  }
}

module.exports = Comment;



