exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
      table.increments('id').primary();
      table.string('article_name').notNullable();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.string('author').notNullable(); // O puedes optar por usar 'username' del usuario
      table.text('content').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  };
  
