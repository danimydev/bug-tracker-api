class KnexAdapter {

  #knex;
  #_config;

  constructor({ knex, config }) {
    this.#_config = config;
    this.#knex = knex(this.#_config);
    console.log('knexAdapter initialized', config);
  }

  static buildKnexConfig(database) {
    return {
      client: database.client,
      connection: {
        host: database.host,
        port: database.port,
        user: database.user,
        password: database.password,
        database: database.database,
      }
    }
  }

  get config() {
    return this.#_config;
  }

  async select({ table, values }) {
    try {
      return await this.#knex
        .select('*')
        .from(table)
        .where(values);
    } catch (error) {
      throw error;
    }
  }

  async insert({ table, values }) {
    try {
      return await this.#knex(table)
        .insert(values)
        .returning('*');
    } catch (error) {
      throw error;
    }
  }

  async update({ table, id, values }) {
    try {
      return await this.#knex(table)
        .where({ id })
        .update(values)
        .returning('*');
    } catch (error) {
      throw error;
    }
  }

  async delete({ table, values }) {
    try {
      return await this.#knex(table)
        .where(values)
        .del();
    } catch (error) {
      throw error;
    }
  }

  getKnex() {
    return this.#knex;
  }

}

module.exports = {
  KnexAdapter,
}