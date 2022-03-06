const knex = require('knex');
const { KnexAdapter } = require('./knex');
const { pgDBConfig } = require('../../config');

const knexAdapter = new KnexAdapter({
  knex,
  config: KnexAdapter.buildKnexConfig(pgDBConfig),
});

module.exports = {
  knexAdapter,
}