const { MemoryDatabase } = require('./memory');
const { loadDBFromJSON } = require('./persistance');

const memoryDatabase = new MemoryDatabase({});
loadDBFromJSON({ memoryDatabase });

module.exports = {
  memoryDatabase,
}