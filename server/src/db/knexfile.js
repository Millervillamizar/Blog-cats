require('dotenv').config({ path: '../../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'comments',
      port: process.env.DB_PORT || 5432
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST || 'roundhouse.proxy.rlwy.net',
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASSWORD || 'dOOBhsjWjAKIXhPvoNvBsWEXQbbjPykb',
      database: process.env.PGDATABASE || 'railway',
      port: process.env.PGPORT || 16453
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
