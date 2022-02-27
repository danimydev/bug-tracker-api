function getAll({ database }) {
  return database.select({
    table: 'project',
  });
}

module.exports = {
  getAll,
}