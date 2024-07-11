class Comment {
  static async findByArticleName(articleName) {
    return knex('comments').where({ article_name: articleName }).select('*');
  }

  static async findById(id) {
    return knex('comments').where({ id }).first();
  }

  static async create(comment) {
    return knex('comments').insert(comment).returning('*');
  }

  static async update(id, comment) {
    return knex('comments').where({ id }).update(comment).returning('*');
  }

  static async delete(id) {
    return knex('comments').where({ id }).del();
  }
}

module.exports = Comment;
