// Update with your config settings.
const { pgDBConfig } = require('../config');
console.log(pgDBConfig);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: pgDBConfig.database,
      user: pgDBConfig.user,
      password: pgDBConfig.password,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: pgDBConfig.database,
      user: pgDBConfig.user,
      password: pgDBConfig.password,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: pgDBConfig.database,
      user: pgDBConfig.user,
      password: pgDBConfig.password,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
