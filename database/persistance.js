const fs = require('fs');
const path = require('path');

function exportMemoryDBToJSON({ memoryDatabase }) {
  try {
    const tables = memoryDatabase.getTables();
    const jsonData = JSON.stringify(tables);
    fs.writeFileSync(path.join(__dirname, '/data/index.json'), jsonData);
  } catch (error) {
    throw error;
  }
}

function loadDBFromJSON({ memoryDatabase }) {
  try {
    const jsonData = fs.readFileSync(path.join(__dirname, '/data/index.json')).toString('utf-8');
    const data = JSON.parse(jsonData);
    memoryDatabase.loadTables(data);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  exportMemoryDBToJSON,
  loadDBFromJSON,
}