const knex = require('../db/knex');

class User {
  static async create(user) {
    return knex('users').insert(user).returning('*');
  }

  static async findByEmail(email) {
    return knex('users').where({ email }).first();
  }
}

module.exports = User;

