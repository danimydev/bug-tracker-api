class MemoryDatabase {

  #tables;

  constructor() {
    this.#tables = {
      user: [],
      project: [],
      bug: [],
    }
  }

  selectById({ table, id }) {
    try {
      return this.#tables[table].find(record => record.id === id);
    } catch (error) {
      throw error;
    }
  }

  select({ table }) {
    try {
      return this.#tables[table];
    } catch (error) {
      throw error;
    }
  }

  insert({ table, record }) {
    try {
      this.#tables[table].push(record);
      return this.#tables[table].find(r => r === record);
    } catch (error) {
      throw error;
    }
  }

  updateById({ table, id, values }) {
    try {
      let current = this.selectById({
        table,
        id,
      });
      if (!current) {
        return false;
      }
      const keys = Object.keys(current);
      keys.forEach(e => {
        current[e] = values[e] || current[e];
      });
      return current;
    } catch (error) {
      throw error;
    }
  }

  deleteById({ table, id }) {
    try {
      this.#tables[table] = this.#tables[table].filter(record => record.id !== id);
      return true;
    } catch (error) {
      throw error;
    }
  }

  getTables() {
    return { ...this.#tables };
  }

  loadTables(data) {
    this.#tables = data;
  }

}

module.exports = {
  MemoryDatabase,
}